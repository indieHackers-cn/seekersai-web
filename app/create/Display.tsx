"use client";

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { useGlobalState } from './ManageState';
import { JDScoresSet, SearchForJDResponse } from './types/JDResponse'

export default function Display() {
    const { isInteration, display } = useGlobalState();

    if ( isInteration || display == null )
        return null

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
                          <div className="flex items-center text-right">
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
                                <span className='text-right font-bold text-xl'>
                                    {(available.score * 100).toFixed(2)} 
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
                              <CheckIcon className="h-6 w-6" />
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
