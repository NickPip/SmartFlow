"use client";

import { useModal } from "@/context/ModalContext";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import { FaReact, FaFigma } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import Link from "next/link";

const getStackIcon = (stackName: string) => {
  switch (stackName.toLowerCase()) {
    case "react":
      return <FaReact className="h-5 w-5" />;
    case "figma":
      return <FaFigma className="h-5 w-5" />;
    case "next.js":
      return <SiNextdotjs className="h-5 w-5" />;
    case "react native":
      return <TbBrandReactNative className="h-5 w-5" />;
    default:
      return null;
  }
};

export default function ProjectDetailModal() {
  const { isProjectModalOpen, closeProjectModal, selectedProject } = useModal();

  if (!selectedProject) return null;

  return (
    <Transition appear show={isProjectModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeProjectModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-5xl transform overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-2xl transition-all">
                {/* Close Button */}
                <button
                  onClick={closeProjectModal}
                  className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/60 hover:scale-110"
                  aria-label="Close modal"
                >
                  <FiX className="h-5 w-5" />
                </button>

                {/* Project Image */}
                <div className="relative h-64 w-full overflow-hidden sm:h-80">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover object-top"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="mb-2 inline-block rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                      {selectedProject.status}
                    </div>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                      {selectedProject.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-teal-300">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="max-h-[calc(100vh-250px)] overflow-y-auto p-6 sm:p-8">
                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="mb-3 text-lg font-semibold text-white">About This Project</h3>
                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.detailedDescription || selectedProject.description}
                    </p>
                  </div>

                  {/* Features */}
                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div className="mb-6">
                      <h3 className="mb-3 text-lg font-semibold text-white">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3 text-slate-300">
                            <svg
                              className="mt-1 h-5 w-5 flex-shrink-0 text-teal-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  {selectedProject.stack && selectedProject.stack.length > 0 && (
                    <div className="mb-6">
                      <h3 className="mb-3 text-lg font-semibold text-white">Tech Stack</h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.stack.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm transition-all hover:bg-white/20"
                          >
                            <div className="flex h-5 w-5 items-center justify-center text-white">
                              {getStackIcon(tech)}
                            </div>
                            <span className="text-sm font-medium text-white">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  {selectedProject.tags && selectedProject.tags.length > 0 && (
                    <div className="mb-6">
                      <h3 className="mb-3 text-lg font-semibold text-white">Technologies & Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-teal-500/20 px-3 py-1 text-xs font-medium text-teal-300 border border-teal-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Backend Information */}
                  {selectedProject.backendInfo && (
                    <div className="mb-6 rounded-lg border border-teal-500/20 bg-teal-500/10 p-4">
                      <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-white">
                        <svg
                          className="h-5 w-5 text-teal-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                          />
                        </svg>
                        Backend & API
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {selectedProject.backendInfo}
                      </p>
                    </div>
                  )}

                  {/* Admin Panel Information */}
                  {selectedProject.adminPanelInfo && (
                    <div className="mb-6 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-4">
                      <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-white">
                        <svg
                          className="h-5 w-5 text-emerald-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        Admin Panel
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {selectedProject.adminPanelInfo}
                      </p>
                    </div>
                  )}

                  {/* Screenshots Gallery */}
                  {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                    <div className="mb-6">
                      <h3 className="mb-3 text-lg font-semibold text-white">Screenshots</h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {selectedProject.screenshots.map((screenshot, index) => (
                          <div
                            key={index}
                            className="relative h-48 w-full overflow-hidden rounded-lg border border-white/10"
                          >
                            <Image
                              src={screenshot}
                              alt={`${selectedProject.title} screenshot ${index + 1}`}
                              fill
                              className="object-cover"
                              sizes="(min-width: 640px) 50vw, 100vw"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technical Details */}
                  {selectedProject.technicalDetails && (
                    <div className="mb-6">
                      <h3 className="mb-3 text-lg font-semibold text-white">Technical Details</h3>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {selectedProject.technicalDetails.architecture && (
                          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                            <p className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                              Architecture
                            </p>
                            <p className="mt-1 text-sm text-slate-300">
                              {selectedProject.technicalDetails.architecture}
                            </p>
                          </div>
                        )}
                        {selectedProject.technicalDetails.database && (
                          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                            <p className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                              Database
                            </p>
                            <p className="mt-1 text-sm text-slate-300">
                              {selectedProject.technicalDetails.database}
                            </p>
                          </div>
                        )}
                        {selectedProject.technicalDetails.deployment && (
                          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                            <p className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                              Deployment
                            </p>
                            <p className="mt-1 text-sm text-slate-300">
                              {selectedProject.technicalDetails.deployment}
                            </p>
                          </div>
                        )}
                        {selectedProject.technicalDetails.api && (
                          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                            <p className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                              API
                            </p>
                            <p className="mt-1 text-sm text-slate-300">
                              {selectedProject.technicalDetails.api}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Project Link */}
                  {selectedProject.link && selectedProject.link !== "#" && (
                    <div className="mt-8 flex justify-center">
                      <Link
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 px-6 py-3 font-semibold text-white transition-all hover:from-teal-600 hover:to-emerald-600 hover:scale-105 hover:shadow-lg"
                      >
                        View Project
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}


