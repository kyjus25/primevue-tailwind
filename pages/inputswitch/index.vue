<template>
    <DocComponent title="Vue InputSwitch Component" header="InputSwitch" description="InputSwitch is used to select a boolean value." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/inputswitch/#api" ptLink="/inputswitch/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/inputswitch/AccessibilityDoc.vue';
import BasicDoc from '@/doc/inputswitch/BasicDoc.vue';
import DisabledDoc from '@/doc/inputswitch/DisabledDoc.vue';
import ImportDoc from '@/doc/inputswitch/ImportDoc.vue';
import InvalidDoc from '@/doc/inputswitch/InvalidDoc.vue';
import PreselectionDoc from '@/doc/inputswitch/PreselectionDoc.vue';
import PresetDoc from '@/doc/inputswitch/preset/index.vue';
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
                    id: 'preselection',
                    label: 'Preselection',
                    component: PreselectionDoc
                },
                {
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
                },
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
