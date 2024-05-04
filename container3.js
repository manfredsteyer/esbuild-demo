import createContainer from './createContainer'

const createdContainer = createContainer({
  name: 'other',
  exposes: {
    './remote': ()=> import('./remote'),
  },
})

export const get = async (a,b)=> (await createdContainer).get(a,b)
export const init = async (a,b) => (await createdContainer).init(a,b)
export const moduleMap = async ()=> (await createdContainer).moduleMap // needs to be exposed from my runtime or plugin or use json remote
