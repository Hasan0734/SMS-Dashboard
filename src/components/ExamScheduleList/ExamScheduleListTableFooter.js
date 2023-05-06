import React from 'react'
import { SvgLeftAngle, SvgRightAngle } from '../../utils/svgIcons'

const ExamScheduleListTableFooter = () => {
  return (
    <div class='flex flex-col justify-between space-y-4 px-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5'>
      <div class='text-xs+'>1 - 10 of 10 entries</div>

      <ol class='pagination'>
        <li class='rounded-l-full bg-slate-150 dark:bg-navy-500'>
          <button class='flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90'>
            {SvgLeftAngle}
          </button>
        </li>
        <li class='bg-slate-150 dark:bg-navy-500'>
          <button class='flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90'>
            1
          </button>
        </li>
        <li class='bg-slate-150 dark:bg-navy-500'>
          <button class='flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'>
            2
          </button>
        </li>
        <li class='bg-slate-150 dark:bg-navy-500'>
          <button class='flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90'>
            3
          </button>
        </li>
        <li class='bg-slate-150 dark:bg-navy-500'>
          <button class='flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90'>
            4
          </button>
        </li>
        <li class='bg-slate-150 dark:bg-navy-500'>
          <button class='flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90'>
            5
          </button>
        </li>
        <li class='rounded-r-full bg-slate-150 dark:bg-navy-500'>
          <button class='flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90'>
            {SvgRightAngle}
          </button>
        </li>
      </ol>
    </div>
  )
}

export default ExamScheduleListTableFooter
