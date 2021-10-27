import MyComponent from '../../../../slices/TextSlice';

export default {
  title: 'slices/TextSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"In aute sint veniam et irure velit magna. Enim ex eu non voluptate incididunt occaecat commodo duis commodo ut veniam.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"TwoColumn","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Quis eu adipisicing Lorem Lorem ut cupidatat sunt aute amet.","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'TwoColumn'
