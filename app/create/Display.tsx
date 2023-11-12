"use client";

import Link from 'next/link';
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { useGlobalState } from './ManageState';
import { JDScoresSet, SearchForJDResponse } from './types/JDResponse'

export default function Display() {
    const { isInteration, display } = useGlobalState();
    const [ FocusedWeb3, setFocusWeb3 ] = useState(false);
    const [ FocusedFinance, setFocusFinance ] = useState(false);
    const [ FocusedAI, setFocusAI ] = useState(false);
    const [ FocusedStartup, setFocusStartup ] = useState(false);
    const [ FocusedStarCorporation, setFocusStarCorporation ] = useState(false);

    if ( isInteration || display == null )
      return (
        <div id='origin' className='mx-auto max-w-3xl mt-0 h-full min-h-[50vh]'>
          <div className='flex flex-wrap'>
            <a href="#_" className="relative inline-flex items-center justify-center my-24 mx-20 px-8 py-6 font-bold text-black group">
              <span className={`absolute inset-0 w-32 h-32 rounded-full transition duration-300 ease-out transform -translate-x-5 -translate-y-5 bg-cyan-400 group-hover:translate-x-0 group-hover:translate-y-0 ${FocusedWeb3?'translate-x-0 translate-y-0':''}`}></span>
              <button 
                className="absolute inset-0 w-32 h-32 rounded-full border-4 border-black inline-flex items-center justify-center"
                onClick={() => setFocusWeb3(!FocusedWeb3)}
                >
                Web3
              </button>
            </a>
            <a href="#_" className="relative inline-flex items-center justify-center my-20 ml-10 mr-14 px-3 py-4 font-bold text-black group">
              <span className={`absolute inset-0 w-28 h-28 rounded-full transition duration-300 ease-out transform -translate-x-5 -translate-y-5 bg-cyan-400 group-hover:translate-x-0 group-hover:translate-y-0 ${FocusedFinance?'translate-x-0 translate-y-0':''}`}></span>
              <button 
                className="absolute inset-0 w-28 h-28 rounded-full border-4 border-black inline-flex items-center justify-center"
                onClick={() => setFocusFinance(!FocusedFinance)}
              >
                Finance
              </button>
            </a>
            <a href="#_" className="relative inline-flex items-center justify-center ml-32 mr-14 mt-12 mb-24 px-10 py-6 font-bold text-black group">
              <span className={`absolute inset-0 w-36 h-36 rounded-full transition duration-300 ease-out transform -translate-x-5 -translate-y-5 bg-cyan-400 group-hover:translate-x-0 group-hover:translate-y-0 ${FocusedAI?'translate-x-0 translate-y-0':''}`}></span>
              <button 
                className="absolute inset-0 w-36 h-36 rounded-full border-4 border-black inline-flex items-center justify-center"
                onClick={() => setFocusAI(!FocusedAI)}
                >
                AI
              </button>
            </a>
            <a href="#_" className="relative inline-flex items-center justify-center ml-32 mr-14 mt-20 mb-24 px-8 py-6 font-bold text-black group">
              <span className={`absolute inset-0 w-24 h-24 rounded-full transition duration-300 ease-out transform -translate-x-4 -translate-y-4 bg-cyan-400 group-hover:translate-x-0 group-hover:translate-y-0 ${FocusedStartup?'translate-x-0 translate-y-0':''}`}></span>
              <button 
              className="absolute inset-0 w-24 h-24 rounded-full border-4 border-black inline-flex items-center justify-center"
              onClick={() => setFocusStartup(!FocusedStartup)}
              >
              Startup
              </button>
            </a>
            <a href="#_" className="relative inline-flex items-center justify-center ml-32 mr-14 mt-12 mb-24 px-10 py-6 font-bold text-black group">
              <span className={`absolute inset-0 w-48 h-48 rounded-full transition duration-300 ease-out transform -translate-x-6 -translate-y-6 bg-cyan-400 group-hover:translate-x-0 group-hover:translate-y-0 ${FocusedStarCorporation?'translate-x-0 translate-y-0':''}`}></span>
              <button 
                className="absolute inset-0 w-48 h-48 rounded-full border-4 border-black inline-flex items-center justify-center"
                onClick={() => setFocusStarCorporation(!FocusedStarCorporation)}
              >
              Star Corporation
              </button>
            </a>
          </div>
        </div>
      )

    const available_jds = display?.JDScoresSet;
    const ExceptionMsg  = display?.ExceptionMsg;
    if (ExceptionMsg) {
        return (
            <div id='no-hits' className='mx-auto max-w-3xl mt-0 h-full min-h-[50vh]'>
              <div className='max-w-none prose md:prose-lg mt-12 px-4 sm:px-6 md:px-0 text-black text-left'>
                <p className='md:text-lg font-bold mb-3'>
                    { ExceptionMsg }
                </p>
                <p className='my-6'>Suggestions: </p>
                <ul className='my-6 list-disc list-inside'>
                  <li className='my-4 text-base'>
                    Check your spelling
                  </li>
                  <li className='my-4 text-base'>
                    Try using fewer, different, or more general keywords
                  </li>
                  <li className='my-4 text-base'>
                    Stay up-to-date, and don't miss an opportunity by signing up for our newsletter
                  </li>
                </ul>
              </div>
            </div>
        )
    }

    return (
      <div id='hits' className='mx-auto max-w-3xl mt-0 h-full min-h-[50vh]'>
        <div className="w-full px-4 py-16">
          <div className="mx-auto w-full max-w-5xl">
             <RadioGroup>
              <RadioGroup.Label className="sr-only">Available jd score</RadioGroup.Label>
              <div className="space-y-3">
                {available_jds.map((available) => (
                  <RadioGroup.Option
                    key={available.jobId}
                    value={available}
                    className={({ active, checked }) =>
                      `${
                        active
                          ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
                          : ''
                      }
                      ${checked ? 'bg-[#f3df79] text-cyan-500' : 'bg-[#f3df79]'}
                        relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center text-left">
                            <div className="text-md">
                              <RadioGroup.Label
                                as="p"
                                className={`font-bold ${
                                  checked ? 'text-red' : 'text-gray-500'
                                }`}
                              >
                                {available.jobId}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className={`inline ${
                                  checked ? 'text-red' : 'text-gray-900'
                                }`}
                              >
                                <span className='text-md font-poppins'>
                                  score: 
                                  <span className='font-bold text-xl pl-2'>
                                      {(available.score * 100).toFixed(2)} 
                                  </span>
                                </span>
                                {/* <span>
                                  {plan.ram}/{plan.cpus}
                                </span>{' '}
                                <span aria-hidden="true">&middot;</span>{' '}
                                <span>{plan.disk}</span> */}
                              </RadioGroup.Description>
                            </div>
                          </div>
                          {checked && (
                            <div className="shrink-0 text-white">
                              <Link
                                href={`${available.jobUrl}`}
                               >
                              <CheckIcon className="h-6 w-6" />
                              </Link>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    )
};

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
