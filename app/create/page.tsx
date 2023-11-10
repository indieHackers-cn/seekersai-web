import {
    getSession,
    getUserDetails,
    getSubscription
} from '@/app/supabase-server';

import { redirect } from 'next/navigation';
import ResumeUpload from "./Upload";
import SearchJob from './Search';

import c from './create.module.css';
import Display from './Display';


export default async function Create() {
  const [session, userDetails, subscription] = await Promise.all([
    getSession(),
    getUserDetails(),
    getSubscription()
  ]);
  
  const user = session?.user;

  if (!session) {
    return redirect('/signin');
  }
  
  if (!user?.id) {
    return redirect('/signin'); 
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="p-2 bg-no-repeat bg-cover bg-[top_center] bg-light-main dark:bg-dark-main max-w-[1400px] mx-auto mb-1">
        <main className="flex flex-1 w-full justify-center text-center px-4 sm:mb-0 mb-8 sm:space-x-8 space-x-0 sm:flex-row flex-col mt-4">
          <div className="sm:w-[440px] w-full flex flex-col gap-3 py-4 p-3">
            <div className="font-bold text-md text-black">Upload your prepared resume</div>
              <div className={c.uploadFile}>
                  <ResumeUpload userID={user?.id} buttonLabel="Upload Your Resume" />
              </div>
              <div className="font-bold text-xl text-black text-left pt-2 gap-3">Search Jobs:</div>
              <div className={c.searchJob}>
                  <SearchJob />
              </div>
          </div>
          <div className="w-[-webkit-fill-available] px-3 md:mt-8 mt-0">
              <h1 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-normal sm:text-6xl mb-5 hidden lg:block text-black">
                get the
                <span className="text-primary-70 text-cyan-500"> awesome jobs </span>
                in seconds
              </h1>
              <p className="text-gray-600 hidden lg:block text-lg font-poppins">the available highest score job with your resume within reach</p>
            <div>
                <Display />
            </div>
          </div>
          </main>
      </div>
    </div>
 
    );
};