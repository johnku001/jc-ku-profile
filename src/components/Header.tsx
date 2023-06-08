import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { User } from '@/models/User';

export interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

interface HeaderProps {
  navigation: NavigationItem[];
  onButtonClick: () => void;
  onNavClick: (item: string) => void;
  user: User;
}

export default function Header({
  navigation,
  onButtonClick,
  onNavClick,
  user,
}: HeaderProps) {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <Disclosure
      as="nav"
      className="fixed md:absolute w-full lg:bg-transparent z-20"
    >
      {({ open }) => (
        <>
          <div className="px-0 sm:px-0 lg:px-9">
            <div className="flex h-16 items-center justify-between">
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    onClick={onButtonClick}
                    type="button"
                    className="flex rounded-full ring-2 ring-gray-800 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only"></span>
                    <Image
                      className="h-9 w-9 object-cover rounded-full"
                      src={user.imageUrl}
                      alt=""
                      width={500}
                      height={500}
                    />
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-700 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      onClick={() => onNavClick(item.name)}
                    >
                      {item.current}
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="w-full flex h-16 items-center justify-between md:hidden bg-neutral-900 px-6">
                {/* Mobile menu button */}
                <button
                  onClick={onButtonClick}
                  type="button"
                  className="flex rounded-full ring-2 ring-gray-800 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only"></span>
                  <Image
                    className="h-9 w-9 object-cover rounded-full"
                    src={user.imageUrl}
                    alt=""
                    width={500}
                    height={500}
                  />
                </button>
                <Disclosure.Button className="flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-100 focus:ring-offset-0.5 focus:ring-offset-gray-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="w-full md:hidden z-10 bg-neutral-800">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation?.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium block'
                  )}
                  onClick={() => onNavClick(item.name)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
