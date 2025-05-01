"use client";

import { useModal } from "@/context/ModalContext";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FiX } from "react-icons/fi";

export default function ContactModal() {
  const { isContactModalOpen, closeContactModal } = useModal();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    projectType: "",
    companyName: "",
    projectDescription: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log("Form submitted:", formData);
    closeContactModal();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Transition appear show={isContactModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeContactModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-gradient-to-b from-gray-50 to-white py-8 font-sans shadow-xl">
                    <div className="px-6 sm:px-8">
                      <div className="flex items-start justify-between">
                        <div>
                          <Dialog.Title
                            as="h3"
                            className="font-sans text-2xl font-bold tracking-tight text-gray-900"
                          >
                            Let&apos;s Build Something Great
                          </Dialog.Title>
                          <p className="mt-2 font-sans text-sm text-gray-500">
                            Share your project details and we&apos;ll get back
                            to you within 24 hours
                          </p>
                        </div>
                        <button
                          onClick={closeContactModal}
                          className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                        >
                          <FiX className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <div className="relative mt-8 flex-1 px-6 sm:px-8">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                          <div>
                            <label
                              htmlFor="fullName"
                              className="block font-sans text-sm font-medium text-gray-700"
                            >
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="block w-full rounded-lg border-gray-300 px-4 py-3 font-sans text-base shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                                placeholder="Your Name"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block font-sans text-sm font-medium text-gray-700"
                            >
                              Business Email{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full rounded-lg border-gray-300 px-4 py-3 font-sans text-base shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                                placeholder="Company Email"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="country"
                              className="block font-sans text-sm font-medium text-gray-700"
                            >
                              Location
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="country"
                                id="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="block w-full rounded-lg border-gray-300 px-4 py-3 font-sans text-base shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Country"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="companyName"
                              className="block font-sans text-sm font-medium text-gray-700"
                            >
                              Company Name
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="companyName"
                                id="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="block w-full rounded-lg border-gray-300 px-4 py-3 font-sans text-base shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Your company or startup name"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="projectType"
                              className="block font-sans text-sm font-medium text-gray-700"
                            >
                              Project Type
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="projectType"
                                id="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                className="block w-full rounded-lg border-gray-300 px-4 py-3 font-sans text-base shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="e.g., Web Application, Mobile App, SaaS Platform"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="projectDescription"
                              className="block font-sans text-sm font-medium text-gray-700"
                            >
                              Project Description
                            </label>
                            <div className="mt-2">
                              <textarea
                                name="projectDescription"
                                id="projectDescription"
                                value={formData.projectDescription}
                                onChange={handleChange}
                                rows={4}
                                className="block w-full rounded-lg border-gray-300 px-4 py-3 font-sans text-base shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Briefly describe your project goals, requirements, and timeline"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-8">
                          <button
                            type="submit"
                            className="w-full rounded-lg bg-indigo-600 px-6 py-4 font-sans text-base font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Submit Request
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
