import * as React from 'react';
import { 
    Show, 
    SimpleShowLayout, 
    TextField, 
    RichTextField, 
    DateField,
    ArrayField,
    SingleFieldList,
    ChipField,
    ImageField
} from 'react-admin';

export const WorkShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="title" />
            <TextField source="author" />
            <RichTextField source="content" />
            <DateField source="create_at" />
            <ImageField source="urlImage" label="Images" /> 
            <ArrayField source="labels">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);
