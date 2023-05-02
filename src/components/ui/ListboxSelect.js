import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import {  ChevronUpDownIcon } from '@heroicons/react/20/solid';

export default function ListboxSelect({
  label = '',
  value,
  error,
  options,
  handleChange,
  name,
  placeholder="",
  className = '',
}) {
  const [selected, setSelected] = useState(
    options.find((option) => option.value === value) || options[0]
  );

    const handleOptionChange = (e) => {
        setSelected(e)
        handleChange(name, e.value, true);
    }


  return (
    <div className=''>
      <label htmlFor=''>{label}</label>
      <Listbox className='mt-1.5' value={selected} onChange={handleOptionChange}>
        <div className='relative mt-1'>
          <Listbox.Button
            className={`form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent relative text-left  ${className}
    }`}
          >
            <span className='block truncate'>
              {value ? selected.label : placeholder}
            </span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='z-20 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-blue-950 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {options.map((option, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  disabled={option.unavailable}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-4 pr-4 ${
                      active
                        ? 'bg-gray-200 text-black rounded'
                        : 'text-gray-900 dark:text-white'
                    }`
                  }
                  value={option}
                >
                  {option.label}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      { error && <span className='text-tiny+ text-error'>{error}</span>}
    </div>
  );
}
