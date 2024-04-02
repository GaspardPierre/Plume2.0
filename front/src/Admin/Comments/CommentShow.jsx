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

export const CommentShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="content" />
            <TextField source="work_id" />
   
            <DateField source="create_at" />
          
        </SimpleShowLayout>
    </Show>
);
