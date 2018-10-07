import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      { id: 1, priority: '1', completed: true, content: 'Mr. Nice' },
      { id: 2, priority: '1', completed: true, content: 'Narco' },
      { id: 3, priority: '1', completed: true, content: 'Bombasto' },
      { id: 4, priority: '1', completed: true, content: 'Celeritas' },
      { id: 5, priority: '1', completed: true, content: 'Magneta' },
      { id: 6, priority: '1', completed: true, content: 'RubberMan' },
      { id: 7, priority: '1', completed: true, content: 'Dynama' },
      { id: 8, priority: '1', completed: true, content: 'Dr IQ' },
      { id: 9, priority: '1', completed: true, content: 'Magma' },
      { id: 10, priority: '1', completed: true, content: 'Tornado' }
    ];
    const heroes = [
      { id: 1, name: 'Mr. Nice' },
      { id: 2, name: 'Narco' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Dynama' },
      { id: 8, name: 'Dr IQ' },
      { id: 9, name: 'Magma' },
      { id: 10, name: 'Tornado' }
    ];
    return { todos, heroes };
  }
}
