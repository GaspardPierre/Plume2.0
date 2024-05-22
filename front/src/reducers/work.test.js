import { fetchWorks } from './work';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import api from '../api';
import { vi } from 'vitest';

// Mock de l'API
vi.mock('../api');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchWorks thunk', () => {
  let store;

  beforeEach(() => {
    store = mockStore({ work: [] });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('dispatches the correct actions on a successful API call', async () => {
    const mockData = [{ id: 1, title: 'Poem 1' }, { id: 2, title: 'Poem 2' }];
    api.get.mockResolvedValue({ data: mockData });

    await store.dispatch(fetchWorks());

    const actions = store.getActions();
    expect(actions[0].type).toBe(fetchWorks.pending.type);
    expect(actions[1].type).toBe(fetchWorks.fulfilled.type);
    expect(actions[1].payload).toEqual(mockData);
  });

  it('dispatches the correct actions on a failed API call', async () => {
    const error = new Error('Failed to fetch');
    api.get.mockRejectedValue(error);

    await store.dispatch(fetchWorks());

    const actions = store.getActions();
    expect(actions[0].type).toBe(fetchWorks.pending.type);
    expect(actions[1].type).toBe(fetchWorks.rejected.type);
    expect(actions[1].error.message).toBe('Failed to fetch');
  });
});
