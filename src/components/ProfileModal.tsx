import React from 'react';
import {
  AiOutlineLinkedin,
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillGithub,
} from 'react-icons/ai';
import Image from 'next/image';
import { User } from '@/models/User';

interface ProfileModalProps {
  user: User;
  show: boolean;
  onClose?: () => void;
}

export default function ProfileModal({
  user,
  show,
  onClose,
}: ProfileModalProps) {
  return (
    <>
      {show ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="false"
        >
          <div className="fixed inset-0 bg-black bg-opacity-5 transition-opacity backdrop-brightness-100 blur-md"></div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-center h-screen w-full justify-center">
              <div className="max-w-xs">
                <div className="w-80 px-6 py-10 text-center backdrop-brightness-50 rounded-lg lg:mt-0 xl:px-10">
                  <div className="space-y-4 xl:space-y-10">
                    <div className="flex-row text-right">
                      <button
                        type="button"
                        className="w-25 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss
                        aria-label="Close"
                        onClick={onClose}
                      >
                        <AiOutlineClose className="text-xl text-gray-100 hover:text-gray-400" />
                      </button>
                    </div>
                    <Image
                      className="object-cover mx-auto rounded-full h-40 w-40 ring-2 ring-gray-100 "
                      src={user.imageUrl}
                      alt="avatar"
                      width={400}
                      height={400}
                    />
                    <div className="space-y-2">
                      <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                        <h3 className="text-white">{user.name}</h3>
                        <p className="text-indigo-300">{user.currentPost}</p>
                        <div className="flex justify-center mt-5 space-x-5">
                          <a
                            href={`mailto:${user?.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-gray-400"
                          >
                            <span className="sr-only">Email</span>
                            <AiOutlineMail className="text-2xl text-gray-100 hover:text-gray-400" />
                          </a>
                          <a
                            href={`https://wa.me/${user?.phone}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-gray-400"
                          >
                            <span className="sr-only">WhatsApp</span>
                            <AiOutlineWhatsApp className="text-2xl text-gray-100 hover:text-gray-400" />
                          </a>
                          <a
                            href={user?.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-gray-400"
                          >
                            <span className="sr-only">Linkedin</span>
                            <AiOutlineLinkedin className="text-2xl text-gray-100 hover:text-gray-400" />
                          </a>
                          <a
                            href={user?.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-gray-400"
                          >
                            <span className="sr-only">GitHub</span>
                            <AiFillGithub className="text-2xl text-gray-100 hover:text-gray-400" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
