export const GET_WORDS = 'GET_WORDS'
export const SET_ACTIVE = 'SET_ACTIVE'


export function getWords () {
  return {
    type: GET_WORDS,
    payload: wordSets
  }
}

export function setActive (set) {
  console.info('setActive', set)
  return {
    type: SET_ACTIVE,
    payload: true
  }
}


const wordSets = [
  {
    id: 0,
    label: 'Set 1',
    isActive: false,
    words: ['the', 'you', 'on', 'I', 'of', 'that', 'are', 'at', 'and', 'it', 'as', 'be', 'to', 'he', 'with', 'this', 'in', 'was', 'his', 'have', 'is', 'for', 'they', 'from']
  },
  {
    id: 1,
    label: 'Set 2',
    isActive: false,
    words: ['or', 'not', 'your', 'each', 'one', 'what', 'can', 'which', 'had', 'all', 'said', 'she', 'by', 'were', 'there', 'do', 'word', 'we', 'use', 'how', 'buy', 'when', 'an', 'their']
  },
  {
    id: 2,
    label: 'Set 3',
    isActive: false,
    words: ['will', 'then', 'would',  'has', 'up', 'them', 'make', 'look', 'other', 'these', 'like', 'two', 'about', 'so', 'him', 'more', 'out', 'some', 'into', 'write', 'many', 'her', 'time', 'see']
  },
  {
    id: 3,
    label: 'Set 4',
    isActive: false,
    words: ['number', 'first', 'now', 'get', 'way', 'water', 'find', 'come', 'could', 'been', 'long', 'made', 'peopel', 'call', 'down', 'may', 'my', 'who', 'day', 'part', 'than', 'oil', 'did', 'over']
  }
]
