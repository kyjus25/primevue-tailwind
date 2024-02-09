export default {
    root: 'flex flex-col grow',
    event: ({ context, props }) => [
        'flex relative min-h-20 last:min-h-0',
        {
            'flex-row-reverse': props.align === 'right' || (props.align === 'alternate' && context?.index % 2 !== 0)
        }
    ],
    separator: 'flex items-center flex-col grow-0 basis-0 shrink',
    marker: 'border border-2 border-primary-500 rounded-full w-4 h-4 bg-surface-0',
    connector: 'w-[2px] bg-surface-200 grow',
    content: ({ context, props }) => [
        'py-0 px-4 text-left flex-1 leading-none',
        {
            'text-right': props.align === 'right' || (props.align === 'alternate' && context?.index % 2 !== 0)
        }
    ],
    opposite: ({ context, props }) => [
        'py-0 px-4 text-right flex-1',
        {
            'text-left': props.align === 'right' || (props.align === 'alternate' && context?.index % 2 !== 0)
        }
    ]

    // root: ({ context, props }) => ({
    //     class: [
    //         // Position
    //         'absolute',
    //         // Spacing
    //         {
    //             'px-1.5': context?.right || context?.left || (!context?.right && !context?.left && !context?.top && !context?.bottom),
    //             'py-1.5': context?.top || context?.bottom
    //         }
    //     ]
    // }),
    // arrow: {
    //     class: 'hidden'
    // },
    // text: {
    //     class: [
    //         // Size
    //         'text-xs leading-none',
    //         // Spacing
    //         'p-2',
    //         // Shape
    //         'rounded-md',
    //         // Color
    //         'text-surface-900 dark:text-surface-0/80',
    //         'bg-surface-0 dark:bg-surface-900',
    //         'ring-1 ring-inset ring-surface-200 dark:ring-surface-800 ring-offset-0',
    //         // Misc
    //         'whitespace-pre-line',
    //         'break-words'
    //     ]
    // }
};
