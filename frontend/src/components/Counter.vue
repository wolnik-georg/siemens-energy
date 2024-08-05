<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <button @click="incrementCounter">Increase Counter</button>
  </div>
</template>

<script>
import axios from 'axios'; // For HTTP requests

export default {
  data() {
    return {
      counter: 0, // Current counter value
      intervalId: null, // ID for polling interval
    };
  },
  created() {
    // Fetch initial counter value and start polling on creation
    this.fetchCounter();
    this.startPolling();
  },
  methods: {
    async fetchCounter() {
      // Fetch current counter value from server
      try {
        const response = await axios.get('http://localhost:4000/counter');
        this.counter = response.data.counter;
      } catch (error) {
        console.error('Error fetching counter:', error);
      }
    },
    async incrementCounter() {
      // Increment counter on server and update local state
      try {
        const response = await axios.post('http://localhost:4000/increment');
        this.counter = response.data.counter;
      } catch (error) {
        console.error('Error incrementing counter:', error);
      }
    },
    startPolling() {
      // Poll the server every 500ms to keep counter updated
      this.intervalId = setInterval(this.fetchCounter, 500);
    },
  },
  beforeDestroy() {
    // Clear interval to prevent memory leaks
    clearInterval(this.intervalId);
  },
};
</script>
