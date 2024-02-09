<template>
    <DocComponent title="Vue Timeline Component" header="Timeline" description="Timeline visualizes a series of chained events." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/timeline/#api" ptLink="/timeline/#pt" />
</template>

<script>
import BasicDoc from '@/doc/timeline/BasicDoc.vue';
import ImportDoc from '@/doc/timeline/ImportDoc.vue';
import AlignmentDoc from '../../doc/timeline/AlignmentDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'alignment',
                    label: 'Alignment',
                    component: AlignmentDoc
                }
                // {
                //     id: 'invalid',
                //     label: 'Invalid',
                //     component: InvalidDoc
                // },
                // {
                //     id: 'disabled',
                //     label: 'Disabled',
                //     component: DisabledDoc
                // },
                // {
                //     id: 'accessibility',
                //     label: 'Accessibility',
                //     component: AccessibilityDoc
                // }
            ],
            presetDoc: {
                key: 'timeline'
            }
        };
    }
};
</script>
