import { mount } from '@vue/test-utils'; // Function to render Vue components
import Counter from '../../components/Counter.vue'; // The component being tested
import { describe, it, expect, beforeEach, vi } from 'vitest'; // Vitest functions for testing
import axios from 'axios'; // HTTP client to be mocked

vi.mock('axios'); // Mock axios to prevent real HTTP requests

describe('Counter.vue', () => {
  beforeEach(() => {
    // Reset axios mocks before each test
    axios.get.mockResolvedValue({ data: { counter: 0 } }); // Mock GET request
    axios.post.mockResolvedValue({ data: { counter: 1 } }); // Mock POST request
  });

  it('renders counter value', async () => {
    const wrapper = mount(Counter); // Render the Counter component
    await wrapper.vm.$nextTick(); // Wait for DOM updates

    expect(wrapper.text()).toContain('Counter: 0'); // Check if counter starts at 0
  });

  it('increments counter value', async () => {
    const wrapper = mount(Counter); // Render the Counter component
    await wrapper.find('button').trigger('click'); // Simulate button click
    await wrapper.vm.$nextTick(); // Wait for DOM updates

    expect(wrapper.text()).toContain('Counter: 1'); // Check if counter increments to 1
  });
});
