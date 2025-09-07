export type Level = {
  id: number
  name: string
  pods: string[]
}

export const LEVELS: Level[] = [
  { id: 1, name: 'Customer Service', pods: ['April', 'Dianne', 'Veronica'] },
  { id: 2, name: 'Sales', pods: ['Jeff', 'Lucy', 'Francine', 'Joe', 'Laura', 'April'] },
  { id: 3, name: 'Finance', pods: ['Colleen', 'Michaela', 'Daniellie'] },
  { id: 4, name: 'Operations', pods: ['Oscar', 'Paul', 'Malcolm', 'Matt', 'Eduardo', 'Veronica'] },
]

export const QUEUES = {
  primary: ['Customer Service', 'Sales', 'Finance', 'Operations'],
  service: ['Customer Service', 'Operations', 'Customer Service'],
  finance: ['Customer Service', 'Finance', 'Operations', 'Finance']
} as const
