import Head from 'next/head';
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import {
  GiStarFormation,
  GiStack,
  GiConqueror,
  GiSpellBook,
  GiHighlighter,
  GiTalk,
} from 'react-icons/gi';
import { useState } from 'react';
import {
  Badge,
  ContactForm,
  Header,
  NightBackground,
  ProfileModal,
  Timeline,
  Toast,
} from '@/components';
import { NavigationItem } from '@/components/Header';
import { navigation, credits, defaultUser } from '@/constants/main';
import { User } from '@/models/User';
import currentUser from '../personal_info.json';

const downloadURI = (uri: string, name: string) => {
  const link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Home() {
  const user = currentUser as User;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [navigationItems, setNavigationItems] =
    useState<NavigationItem[]>(navigation);

  return (
    <div>
      <Head>
        <title>{user.name}&apos;s Resume</title>
        <meta name="description" content={`This is ${user.name} Resume`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        user={user}
        navigation={navigationItems}
        onButtonClick={() => setShowModal(true)}
        onNavClick={(item) =>
          setNavigationItems(
            navigationItems.map((nav) => {
              return nav.name === item
                ? { ...nav, current: true }
                : { ...nav, current: false };
            })
          )
        }
      />
      <main className="flex flex-col lg:flex-row lg:h-screen">
        <div className="w-full h-auto md:w-50 lg:h-full bg-cover bg-center flex justify-start lg:justify-center lg:items-center px-8 lg:px-4">
          <NightBackground />
          <div className="pt-20 my-8 px-8 flex-column opacity-95 justify-items-start lg:justify-center lg:py-0">
            <div className="md:justify-center flex-column space-y-2">
              <h2 className="text-slate-200 text-2xl font-bold">
                Hello, it is
              </h2>
              <h1 className="text-slate-200 text-5xl font-bold">{user.name}</h1>
              <h2 className="text-slate-200 text-2xl font-bold">
                And I&apos;m a{' '}
                <span className="capitalize">{user.currentPost}</span>
              </h2>
            </div>
            <div className="mt-8 flex-row justify-center">
              <a
                className="inline-flex bg-slate-200 items-center px-1 py-1 mx-1.5 rounded-full text-slate hover:bg-gray-400 ring-slate-300 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 cursor-pointer"
                href={user?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin className="text-2xl text-slate-800" />
              </a>
              <a
                className="inline-flex bg-slate-100 items-center px-1 py-1 mx-1.5 rounded-full text-slate hover:bg-gray-400 ring-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 cursor-pointer"
                href={user?.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub className="text-2xl text-slate-800" />
              </a>
              <a
                className="inline-flex bg-slate-100 items-center px-1 py-1 mx-1.5 rounded-full text-slate hover:bg-gray-400 ring-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 cursor-pointer"
                href={`mailto:${user?.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail className="text-2xl text-slate-800" />
              </a>
              <a
                className="inline-flex bg-slate-100 items-center px-1 py-1 mx-1.5 rounded-full text-slate hover:bg-gray-400 ring-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 cursor-pointer"
                href={`https://wa.me/${user?.phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp className="text-2xl text-slate-800" />
              </a>
            </div>
            <div className="mt-8 flex-row justify-center">
              <button
                type="button"
                className="animate-bounce shadow-sm inline-flex items-center rounded-xl px-3 py-2 text-sm bg-slate-100 hover:bg-gray-400 ring-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                onClick={() => downloadURI(user.resume, 'jc-resume.pdf')}
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="absolute bottom-5 bg-transparent text-sm text-gray-200 text-center hidden md:flex">
            © 2023 by
            <a className="ml-2" href="https://github.com/johnku001">
              JC Ku.
            </a>
          </div>
        </div>
        <div className="w-full h-auto md:w-50  lg:h-full overflow-y-auto p-8 text-slate-300 lg:pt-16">
          <section
            id="introduction"
            className="flex-grow flex flex-col justify-center mx-3 px-2 py-16 my-6 lg:mx-4 lg:px-4xl:mx-8 xl:px-8  "
          >
            <h2 className="font-bold text-left text-2xl my-3 lg:text-3xl lg:my-8">
              <GiStarFormation className="inline-block mb-1 mr-2" />{' '}
              Introduction
            </h2>
            <p className="text-left leading-relaxed text-md my-5 lg:text-lg lg:my-4">
              {user.personalStatement}
            </p>
          </section>
          <section
            id="tech-stack"
            className="flex-grow flex flex-col justify-center mx-3 px-2 py-16 my-6 lg:mx-4 lg:px-4xl:mx-8 xl:px-8 "
          >
            <h2 className="font-bold text-left text-2xl my-3 lg:text-3xl lg:my-8">
              <GiStack className="inline-block mb-1 mr-2" /> Tech Stack
            </h2>
            <table className="table-fixed w-full gap-4">
              <tbody>
                <tr className="h-20">
                  <td className="text-left text-md lg:text-lg sm:w-2/5 lg:w-2/6">
                    Programming Languages
                  </td>
                  <td className="sm:w-3/5 lg:w-4/6">
                    <div className="w-full flex flex-wrap">
                      {user.skills.programmingLanguages.map((language) => (
                        <Badge text={language} key={language} color="gray" />
                      ))}
                    </div>
                  </td>
                </tr>
                <tr className="h-20">
                  <td className="text-left text-md lg:text-lg sm:w-2/5 lg:w-2/6">
                    Tool and Frameworks
                  </td>
                  <td className="sm:w-3/5 lg:w-4/6">
                    <div className="w-full flex flex-wrap">
                      {user.skills.frameworksAndTools.map((item) => (
                        <Badge text={item} key={item} color="gray" />
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section
            id="work-experience"
            className="flex-grow flex flex-col justify-center mx-3 px-2 py-16 my-6 lg:mx-4 lg:px-4xl:mx-8 xl:px-8 "
          >
            <h2 className="font-bold text-left text-2xl my-3 lg:text-3xl lg:my-8">
              <GiConqueror className="inline-block mb-1 mr-2" /> Working
              Experience
            </h2>
            <Timeline timelineData={user.workExperience} />
          </section>
          <section
            id="education"
            className="flex-grow flex flex-col justify-center mx-3 px-2  py-16 my-6 lg:mx-4 lg:px-4xl:mx-8 xl:px-8 "
          >
            <h2 className="font-bold text-left text-2xl my-3 lg:text-3xl lg:my-8">
              <GiSpellBook className="inline-block mb-1 mr-2" /> Education
            </h2>
            <Timeline timelineData={user.education} align="right" />
          </section>
          <section
            id="contact-me"
            className="flex-grow flex flex-col justify-center mx-3 px-2 py-16 my-6 lg:mx-4 lg:px-4xl:mx-8 xl:px-8 mb-10"
          >
            <h2 className="font-bold text-left text-2xl my-3 lg:text-3xl lg:my-8">
              <GiTalk className="inline-block mb-1 mr-2" /> Contact me
            </h2>
            <ContactForm
              onSubmit={() => {
                setShowToast(true);
              }}
            />
          </section>
          <section
            id="credits"
            className="flex-grow flex flex-col justify-center mx-3 px-2 py-16 my-6 lg:mx-4 lg:px-4xl:mx-8 xl:px-8 mb-10"
          >
            <h2 className="font-bold text-left text-2xl my-3 lg:text-3xl lg:my-8">
              <GiHighlighter className="inline-block mb-1 mr-2" /> Credits
            </h2>
            <div className="w-full">
              <ul className="list-outside list-disc ml-10 mb-20">
                {credits.map((credit, index) => (
                  <li key={index} className="mb-4 font-bold text-lg">
                    <a href={credit.url} target="_blank" rel="noreferrer">
                      {credit.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <div className="bg-transparent text-sm text-gray-200 text-center md:hidden">
            © 2023 by{' '}
            <a className="ml-2" href="https://github.com/johnku001">
              {' '}
              JC Ku.
            </a>
          </div>
        </div>
        <ProfileModal
          user={user}
          show={showModal}
          onClose={() => setShowModal(false)}
        />
        <Toast
          show={showToast}
          type="success"
          onClose={() => setShowToast(false)}
          text="The message has been sent"
        />
      </main>
    </div>
  );
}
