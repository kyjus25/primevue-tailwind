<template>
    <DocComponent
        title="Vue Popover Component"
        header="OverlayPanel"
        description="OverlayPanel, also known as Popover, is a container component that can overlay other components on page."
        :componentDocs="docs"
        :presetDoc="presetDoc"
        apiLink="/overlaypanel/#api"
        ptLink="/overlaypanel/#pt"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/overlaypanel/AccessibilityDoc.vue';
import BasicDoc from '@/doc/overlaypanel/BasicDoc.vue';
import ImportDoc from '@/doc/overlaypanel/ImportDoc.vue';
import PresetDoc from '@/doc/overlaypanel/preset/index.vue';
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
                // {
                //     id: 'datatable',
                //     label: 'DataTable',
                //     component: DataTableDoc
                // },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: PresetDoc
        };
    }
};
</script>
