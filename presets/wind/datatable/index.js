export default {
    root: ({ props }) => ({
        class: [
            'relative',

            // Flex & Alignment
            { 'flex flex-col': props.scrollable && props.scrollHeight === 'flex' },

            // Size
            { 'h-full': props.scrollable && props.scrollHeight === 'flex' }
        ]
    }),
    loadingoverlay: {
        class: [
            // Position
            'absolute',
            'top-0 left-0',
            'z-20',

            // Flex & Alignment
            'flex items-center justify-center',

            // Size
            'w-full h-full',

            // Color
            'bg-surface-100/40 dark:bg-surface-800/40',

            // Transition
            'transition duration-200'
        ]
    },
    loadingicon: {
        class: 'w-8 h-8'
    },
    wrapper: ({ props }) => ({
        class: [
            { relative: props.scrollable, 'flex flex-col grow': props.scrollable && props.scrollHeight === 'flex' },

            // Size
            { 'h-full': props.scrollable && props.scrollHeight === 'flex' }
        ]
    }),
    header: ({ props }) => ({
        class: [
            'font-bold',

            // Shape
            props.showGridlines ? 'border-b' : 'border-b border-x-0',

            // Spacing
            'py-3.5 px-3',

            // Color
            'bg-surface-0 dark:bg-surface-800',
            'border-surface-300 dark:border-surface-600',
            'text-surface-700 dark:text-white/80'
        ]
    }),
    table: {
        class: 'w-full border-spacing-0'
    },
    thead: ({ context }) => ({
        class: [
            {
                'top-0 z-20 sticky': context.scrollable
            }
        ]
    }),
    tbody: ({ instance, context }) => ({
        class: [
            'border-t border-surface-300 dark:border-surface-600',
            {
                'sticky z-20': instance.frozenRow && context.scrollable
            }
        ]
    }),
    tfoot: ({ context }) => ({
        class: [
            {
                'bottom-0 z-20': context.scrollable
            }
        ]
    }),
    footer: {
        class: [
            'font-bold',

            // Shape
            'border-t-0 border-t border-x-0',

            // Spacing
            'p-4',

            // Color
            'bg-surface-0 dark:bg-surface-800',
            'border-surface-200 dark:border-surface-700',
            'text-surface-700 dark:text-white/80'
        ]
    },
    column: {
        headercell: ({ context, props }) => ({
            class: [
                'font-semibold',
                'text-sm',

                // Position
                { 'sticky z-20': props.frozen || props.frozen === '' },
                { relative: context.resizable },

                // Alignment
                'text-left',

                // Shape
                { 'border-r last:border-r-0': context?.showGridlines },
                'border-0',

                // Spacing
                context?.size === 'small' ? 'py-2.5 px-2' : context?.size === 'large' ? 'py-5 px-4' : 'py-3.5 px-3',
                // Color
                context.sorted ? 'text-primary-500' : 'bg-surface-0 text-surface-700',
                context.sorted ? 'dark:text-primary-400' : 'dark:text-white/80 dark:bg-surface-800',
                'border-surface-200 dark:border-surface-700 ',

                // States
                { 'hover:bg-surface-100 dark:hover:bg-surface-400/30': props.sortable && !context?.sorted },

                // Transition
                'transition duration-200',

                // Misc
                { 'cursor-pointer': props.sortable },
                {
                    'overflow-hidden space-nowrap bg-clip-padding': context.resizable
                }
            ]
        }),
        headercontent: {
            class: 'flex items-center'
        },
        sort: ({ context }) => ({
            class: [context.sorted ? 'text-primary-500' : 'bg-surface-0 text-surface-700', context.sorted ? 'dark:text-primary-400' : 'dark:text-white/80 dark:bg-surface-800']
        }),
        bodycell: ({ props, context, state, parent }) => ({
            class: [
                'text-sm',

                //Position
                { 'sticky bg-inherit': props.frozen || props.frozen === '' },

                // Alignment
                'text-left',
                // Shape
                { 'border-0 border-r last:border-r-0 border-solid': context?.showGridlines },
                { 'border-0 border-solid': !context?.showGridlines },

                // Spacing
                { 'py-2.5 px-2': context?.size === 'small' && !state['d_editing'] },
                { 'py-5 px-4': context?.size === 'large' && !state['d_editing'] },
                { 'py-3.5 px-3': context?.size !== 'large' && context?.size !== 'small' && !state['d_editing'] },
                { 'py-[0.6rem] px-2': state['d_editing'] },

                // Color
                'border-surface-200 dark:border-surface-700',

                // Misc
                'space-nowrap'
            ]
        }),
        footercell: ({ context }) => ({
            class: [
                // Font
                'font-bold',

                // Alignment
                'text-left',

                // Shape
                { 'border-r last:border-r-0': context?.showGridlines },
                'border-0 border-t border-solid',

                // Spacing
                context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4',

                // Color
                'border-surface-200 dark:border-surface-700',
                'text-surface-700 dark:text-white/80',
                'bg-surface-0 dark:bg-surface-800',

                // Transition
                'transition duration-200'
            ]
        }),
        sorticon: {
            class: 'ml-2'
        },
        sortbadge: {
            class: [
                // Flex & Alignment
                'flex items-center justify-center align-middle',

                // Shape
                'rounded-full',

                // Size
                'w-[1.143rem] leading-[1.143rem]',

                // Spacing
                'ml-2',

                // Color
                'text-primary-700 dark:text-white',
                'bg-primary-50 dark:bg-primary-400/30'
            ]
        },
        columnfilter: {
            class: 'inline-flex items-center ml-auto'
        },
        filteroverlay: {
            class: [
                // Position
                'absolute top-0 left-0',
                'mt-2',

                // Shape
                'border-0',
                'rounded-md',
                'shadow-md',

                // Size
                'min-w-[12.5rem]',

                // Color
                'bg-surface-0 dark:bg-surface-800',
                'text-surface-800 dark:text-white/80',
                'ring-1 ring-inset ring-surface-300 dark:ring-surface-700'
            ]
        },
        filtermatchmodedropdown: {
            root: {
                class: [
                    // Display and Position
                    'flex',
                    'relative',

                    // Spacing
                    'mb-2',

                    // Shape
                    'w-full',
                    'rounded-md',
                    'shadow-sm',

                    // Color and Background
                    'text-surface-800 dark:text-white/80',
                    'bg-surface-0 dark:bg-surface-900',
                    'ring-1 ring-inset ring-surface-300 dark:ring-surface-700',

                    // Transitions
                    'transition-all',
                    'duration-200',

                    // States
                    'focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500',

                    // Misc
                    'cursor-default',
                    'select-none'
                ]
            },
            input: {
                class: [
                    //Font
                    'font-sans',
                    'leading-6',
                    'sm:text-sm',

                    // Display
                    'block',
                    'flex-auto',

                    // Color and Background
                    'bg-transparent',
                    'border-0',
                    'text-surface-800 dark:text-white/80',

                    'py-1.5 px-3',

                    //Shape
                    'rounded-none',

                    // Transitions
                    'transition',
                    'duration-200',

                    // States
                    'focus:outline-none focus:shadow-none',

                    // Misc
                    'relative',
                    'cursor-pointer',
                    'overflow-hidden overflow-ellipsis',
                    'whitespace-nowrap',
                    'appearance-none'
                ]
            }
        },
        filterrowitems: {
            class: 'py-1 list-none m-0'
        },
        filterrowitem: ({ context }) => ({
            class: [
                // Font
                'sm:text-sm',
                'leading-none',
                { 'font-normal': !context?.highlighted, 'font-bold': context?.highlighted },

                // Position
                'relative',

                // Shape
                'border-0',
                'rounded-none',

                // Spacing
                'm-0',
                'py-2 px-4',

                // Color
                { 'text-surface-700 dark:text-white/80': !context?.highlighted },
                { 'bg-surface-0 dark:bg-surface-800 text-surface-700 dark:text-white/80': !context?.highlighted },
                { 'bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700': context?.highlighted },

                //States
                'hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700',

                // Transitions
                'transition-shadow',
                'duration-200',

                // Misc
                'cursor-pointer',
                'overflow-hidden',
                'whitespace-nowrap'
            ]
        }),
        filteroperator: {
            class: [
                // Spacing
                'p-4',

                // Shape
                'border-b border-solid',
                'rounded-t-md',

                // Color
                'text-surface-700 dark:text-white/80',
                'border-surface-200 dark:border-surface-700'
            ]
        },
        filteroperatordropdown: {
            root: {
                class: [
                    // Display and Position
                    'flex',
                    'relative',

                    // Shape
                    'w-full',
                    'rounded-md',
                    'shadow-sm',

                    // Color and Background
                    'text-surface-800 dark:text-white/80',
                    'bg-surface-0 dark:bg-surface-900',
                    'ring-1 ring-inset ring-surface-300 dark:ring-surface-700',

                    // Transitions
                    'transition-all',
                    'duration-200',

                    // States
                    'focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',

                    // Misc
                    'cursor-default',
                    'select-none'
                ]
            },
            input: {
                class: [
                    //Font
                    'font-sans',
                    'leading-6',
                    'sm:text-sm',

                    // Display
                    'block',
                    'flex-auto',

                    // Color and Background
                    'bg-transparent',
                    'border-0',
                    'text-surface-800 dark:text-white/80',

                    'py-1.5 px-3',

                    //Shape
                    'rounded-none',

                    // Transitions
                    'transition',
                    'duration-200',

                    // States
                    'focus:outline-none focus:shadow-none',

                    // Misc
                    'relative',
                    'cursor-pointer',
                    'overflow-hidden overflow-ellipsis',
                    'whitespace-nowrap',
                    'appearance-none'
                ]
            },
            trigger: {
                class: [
                    // Flexbox
                    'flex items-center justify-center',
                    'shrink-0',

                    // Color and Background
                    'bg-transparent',
                    'text-surface-500',

                    // Size
                    'w-12',

                    // Shape
                    'rounded-tr-md',
                    'rounded-br-md'
                ]
            },
            panel: {
                class: [
                    // Position
                    'absolute top-0 left-0',
                    'mt-2',

                    // Shape
                    'border-0',
                    'rounded-md',
                    'shadow-md',

                    // Size
                    'min-w-[12.5rem]',

                    // Color
                    'bg-surface-0 dark:bg-surface-800',
                    'text-surface-800 dark:text-white/80',
                    'ring-1 ring-inset ring-surface-300 dark:ring-surface-700'
                ]
            },
            list: {
                class: 'py-1 list-none m-0'
            },
            item: ({ context }) => ({
                class: [
                    // Font
                    'sm:text-sm',
                    'leading-none',
                    { 'font-normal': !context?.highlighted, 'font-bold': context?.highlighted },

                    // Position
                    'relative',

                    // Shape
                    'border-0',
                    'rounded-none',

                    // Spacing
                    'm-0',
                    'py-2 px-4',

                    // Color
                    { 'text-surface-700 dark:text-white/80': !context?.highlighted },
                    { 'bg-surface-0 dark:bg-surface-800 text-surface-700 dark:text-white/80': !context?.highlighted },
                    { 'bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700': context?.highlighted },

                    //States
                    'hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700',

                    // Transitions
                    'transition-shadow',
                    'duration-200',

                    // Misc
                    'cursor-pointer',
                    'overflow-hidden',
                    'whitespace-nowrap'
                ]
            })
        },
        filterconstraint: {
            class: [
                // Spacing
                'p-4',

                // Shape
                'border-b border-solid',

                // Color
                'border-surface-200 dark:border-surface-700'
            ]
        },
        filteraddrule: {
            class: 'pt-4 pb-2 px-4'
        },
        filteraddrulebutton: {
            root: {
                class: [
                    'relative',

                    // Alignments
                    'items-center inline-flex text-center align-bottom justify-center',

                    // Sizes & Spacing
                    'text-sm px-2.5 py-1.5 min-w-[2rem] w-full',

                    // Shape
                    'rounded-md',

                    'bg-transparent border-transparent',
                    'text-primary-500 dark:text-primary-400',
                    'hover:bg-primary-300/20',
                    'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-current',
                    'focus:ring-primary-500 dark:focus:ring-primary-400',

                    // Transitions
                    'transition duration-200 ease-in-out',

                    // Misc
                    'cursor-pointer overflow-hidden select-none'
                ]
            },
            label: {
                class: 'flex-auto grow-0'
            },
            icon: {
                class: 'mr-2'
            }
        },
        filterremovebutton: {
            root: {
                class: [
                    'relative',

                    // Alignments
                    'items-center inline-flex text-center align-bottom justify-center',

                    // Sizes & Spacing
                    'text-sm px-2.5 py-1.5 min-w-[2rem] w-full mt-2',

                    // Shape
                    'rounded-md',

                    'bg-transparent border-transparent',
                    'text-red-500 dark:text-red-400',
                    'hover:bg-red-300/20',
                    'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-current',
                    'focus:ring-red-500 dark:focus:ring-red-400',

                    // Transitions
                    'transition duration-200 ease-in-out',

                    // Misc
                    'cursor-pointer overflow-hidden select-none'
                ]
            },
            label: {
                class: 'flex-auto grow-0'
            },
            icon: {
                class: 'mr-2'
            }
        },
        filterbuttonbar: {
            class: [
                // Flex & Alignment
                'flex items-center justify-between',

                // Space
                'py-4 px-4'
            ]
        },
        filterclearbutton: {
            root: {
                class: [
                    'relative',

                    // Alignments
                    'items-center inline-flex text-center align-bottom justify-center',

                    // Sizes & Spacing
                    'text-sm px-2.5 py-1.5 min-w-[2rem]',

                    // Shape
                    'rounded-md shadow-sm border-0',

                    'text-primary-500 ring-1 ring-primary-500 hover:bg-primary-300/20',
                    'hover:bg-primary-300/20',
                    'focus:ring-primary-500 dark:focus:ring-primary-400',

                    // Transitions
                    'transition duration-200 ease-in-out',

                    // Misc
                    'cursor-pointer overflow-hidden select-none'
                ]
            }
        },
        filterapplybutton: {
            root: {
                class: [
                    'relative',

                    // Alignments
                    'items-center inline-flex text-center align-bottom justify-center',

                    // Sizes & Spacing
                    'text-sm px-2.5 py-1.5 min-w-[2rem]',

                    // Shape
                    'rounded-md border-0',

                    'text-white dark:text-surface-900',
                    'bg-primary-500 dark:bg-primary-400',
                    'ring-1 ring-primary-500 dark:ring-primary-400',
                    'hover:bg-primary-600 dark:hover:bg-primary-300 hover:ring-primary-600 dark:hover:ring-primary-300',
                    'focus:ring-primary-500 dark:focus:ring-primary-400',

                    // Transitions
                    'transition duration-200 ease-in-out',

                    // Misc
                    'cursor-pointer overflow-hidden select-none'
                ]
            }
        },
        filtermenubutton: ({ context }) => ({
            class: [
                'relative',
                // Flex & Alignment
                'inline-flex items-center justify-center',

                // Size
                'w-8 h-8',

                // Spacing
                'ml-2',

                // Shape
                'rounded-full',

                // Color
                { 'bg-primary-50 text-primary-700': context.active },
                'dark:text-white/70 dark:hover:text-white/80 dark:bg-surface-800',

                // States
                'hover:text-surface-700 hover:bg-surface-300/20',
                'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400',

                // Transition
                'transition duration-200',

                // Misc
                'cursor-pointer no-underline overflow-hidden'
            ]
        }),
        headerfilterclearbutton: ({ context }) => ({
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex items-center justify-center',
                'text-left',

                // Shape
                'border-none',

                // Spacing
                'm-0 p-0 ml-2',

                // Color
                'bg-transparent',

                // Misc
                'cursor-pointer no-underline overflow-hidden select-none',
                {
                    invisible: !context.hidden
                }
            ]
        }),
        columnresizer: {
            class: [
                'block',

                // Position
                'absolute top-0 right-0',

                // Sizing
                'w-2 h-full',

                // Spacing
                'm-0 p-0',

                // Color
                'border border-transparent',

                // Misc
                'cursor-col-resize'
            ]
        },
        rowreordericon: {
            class: 'cursor-move'
        },
        roweditorinitbutton: {
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex items-center justify-center',
                'text-left',

                // Size
                'w-8 h-8',

                // Shape
                'border-0 rounded-full',

                // Color
                'text-surface-700 dark:text-white/70',
                'border-transparent',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400',
                'hover:text-surface-700 hover:bg-surface-300/20',

                // Transition
                'transition duration-200',

                // Misc
                'overflow-hidden',
                'cursor-pointer select-none'
            ]
        },
        roweditorsavebutton: {
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex items-center justify-center',
                'text-left',

                // Size
                'w-8 h-8',

                // Shape
                'border-0 rounded-full',

                // Color
                'text-surface-700 dark:text-white/70',
                'border-transparent',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400',
                'hover:text-surface-700 hover:bg-surface-300/20',

                // Transition
                'transition duration-200',

                // Misc
                'overflow-hidden',
                'cursor-pointer select-none'
            ]
        },
        roweditorcancelbutton: {
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex items-center justify-center',
                'text-left',

                // Size
                'w-8 h-8',

                // Shape
                'border-0 rounded-full',

                // Color
                'text-surface-700 dark:text-white/70',
                'border-transparent',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400',
                'hover:text-surface-700 hover:bg-surface-300/20',

                // Transition
                'transition duration-200',

                // Misc
                'overflow-hidden',
                'cursor-pointer select-none'
            ]
        },
        radiobuttonwrapper: {
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex align-bottom',

                // Size
                'w-4 h-4',

                // Misc
                'cursor-pointer select-none'
            ]
        },
        radiobutton: ({ context }) => ({
            class: [
                // Flexbox
                'flex justify-center items-center',

                // Size
                'w-4 h-4',
                'text-sm',
                'font-medium',

                // Shape
                'border-2',
                'rounded-full',

                // Color
                { 'text-surface-700 dark:text-white/80': !context.checked },
                { 'bg-surface-0 dark:bg-surface-900': !context.checked },
                { 'border-surface-300 dark:border-surface-700': !context.checked },
                { 'border-primary-500 dark:border-primary-400': context.checked },

                // States
                { 'hover:border-primary-500 dark:hover:border-primary-400': !context.disabled },
                { 'ring-2 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-800 ring-primary-500 dark:ring-primary-400': context.focused },

                // Transition
                'transition duration-200 ease-in-out',

                // Misc
                { 'cursor-default opacity-60': context.disabled }
            ]
        }),
        radiobuttonicon: {
            class: 'hidden'
        },
        headercheckboxwrapper: {
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex align-bottom',

                // Size
                'w-4',
                'h-4',

                // Misc
                'cursor-default select-none'
            ]
        },
        headercheckbox: ({ context }) => ({
            class: [
                // Flex & Alignment
                'flex items-center justify-center',

                // Shape
                'rounded',
                'border',

                // Size
                'w-4',
                'h-4',

                // Color
                'text-surface-600',
                {
                    'border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900': !context.checked,
                    'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400': context.checked
                },

                // States
                'focus:outline-none focus:outline-offset-0',
                {
                    'ring-2 ring-primary-500 dark:ring-primary-400': context.focused
                },

                // Transition
                'transition-colors duration-200',

                // Misc
                { 'cursor-default opacity-60': context.disabled }
            ]
        }),
        headercheckboxicon: {
            class: [
                // Font
                'text-normal',

                // Size
                'w-3',
                'h-3',

                // Color
                'text-white dark:text-surface-900',

                // Transition
                'transition-all duration-200'
            ]
        },
        checkboxwrapper: {
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex align-bottom',

                // Size
                'w-4',
                'h-4',

                // Misc
                'cursor-default select-none'
            ]
        },
        checkbox: ({ context }) => ({
            class: [
                // Flex & Alignment
                'flex items-center justify-center',

                // Shape
                'rounded',
                'border',

                // Size
                'w-4',
                'h-4',

                // Color
                'text-surface-600',
                {
                    'border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900': !context.checked,
                    'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400': context.checked
                },

                // States
                'focus:outline-none focus:outline-offset-0',
                {
                    'ring-2 ring-primary-500 dark:ring-primary-400': context.focused
                },

                // Transition
                'transition-colors duration-200',

                // Misc
                { 'cursor-default opacity-60': context.disabled }
            ]
        }),
        checkboxicon: {
            class: [
                // Font
                'text-normal',

                // Size
                'w-3',
                'h-3',

                // Color
                'text-white dark:text-surface-900',

                // Transition
                'transition-all duration-200'
            ]
        },
        transition: {
            enterFromClass: 'opacity-0 scale-y-[0.8]',
            enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
            leaveActiveClass: 'transition-opacity duration-100 ease-linear',
            leaveToClass: 'opacity-0'
        }
    },
    bodyrow: ({ context, props }) => ({
        class: [
            // Color
            'dark:text-white/80',
            { 'bg-surface-100 dark:bg-surface-500/30': context.selected && context.stripedRows },
            { 'bg-surface-50 dark:bg-surface-500/30': context.selected && !context.stripedRows },
            { 'bg-surface-0 text-surface-600 dark:bg-surface-800': !context.selected },
            { 'bg-surface-0 dark:bg-surface-800': props.frozenRow },
            { 'odd:bg-surface-0 odd:text-surface-600 dark:odd:bg-surface-800 even:bg-surface-50 even:text-surface-600 dark:even:bg-surface-900/60': context.stripedRows && !context.selected },
            { 'border-0': context.stripedRows && !context.showGridlines },
            { 'last:border-b-0 border-b border-solid border-surface-200 dark:border-surface-700': !context.stripedRows },

            // State
            { 'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50': context.selectable },
            { 'hover:bg-surface-300/20 hover:text-surface-600': context.selectable && !context.selected },

            // Transition
            'transition duration-200',

            // Misc
            { 'cursor-pointer': context.selectable }
        ]
    }),
    rowexpansion: {
        class: 'bg-surface-0 dark:bg-surface-800 text-surface-600 dark:text-white/80'
    },
    rowgroupheader: {
        class: ['sticky z-20', 'bg-surface-0 text-surface-600', 'dark:bg-surface-800', 'transition duration-200']
    },
    rowgroupfooter: {
        class: ['sticky z-20', 'bg-surface-0 text-surface-600', 'dark:bg-surface-800', 'transition duration-200']
    },
    rowgrouptoggler: {
        class: [
            'relative',

            // Flex & Alignment
            'inline-flex items-center justify-center',
            'text-left',

            // Spacing
            'm-0 p-0',

            // Size
            'w-8 h-8',

            // Shape
            'border-0 rounded-full',

            // Color
            'text-surface-500 dark:text-white/70',
            'bg-transparent',

            // Transition
            'transition duration-200',

            // Misc
            'overflow-hidden',
            'cursor-pointer select-none'
        ]
    },
    rowgrouptogglericon: {
        class: 'inline-block w-4 h-4'
    },
    resizehelper: {
        class: 'absolute hidden w-[2px] z-20 bg-primary-500 dark:bg-primary-400'
    }
};
