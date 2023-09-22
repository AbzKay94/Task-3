<template>
  <div class="experience">
    <h2>Work Experience</h2>
    <table>
      <thead>
      <tr>
        <th>Position</th>
        <th>Company</th>
        <th>Description</th>
        <th>Start Date</th>
        <th>End Date</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(experience, index) in previousExperience" :key="index">
        <td>{{ experience.position }}</td>
        <td>{{ experience.company }}</td>
        <td>{{ experience.description }}</td>
        <td>{{ experience.startDate }}</td>
        <td>{{ experience.endDate }}</td>
      </tr>
      </tbody>
    </table>
    <router-link to="/" class="button">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
      previousExperience: [
        {
          position: "Security Guard",
          company: "ACG",
          description: "Security for several locations, events & functions, did this while completing uni and I had several great experiences and met all kinds of people.",
          startDate: "01/08/2012",
          endDate: "30/12/2017",
        },
        {
          position: "Team Leader",
          company: "Serco",
          description: "Team leader at a call centre under contract by Human Services Australia. We were responsible for calls relation to The Job Seeker payment along with the Family Benefit payment. I used to manage a team of 18 members, and learned a lot throughout my time there.",
          startDate: "01/01/2018",
          endDate: "02/03/2019",
        },
        {
          position: "Redemptions Officer",
          company: "Netwealth",
          description: "My current position involves reviewing/quality checking work that other staff members of my team process. My team is the Money Out team which deals which all withdrawals/payments that we have to process from our Investment/Superannuation platform. It is very important that we process everything correctly, and it is my job to review 90% of the payments we process before they are released.",
          startDate: "02/04/2019",
          endDate: "Current",
        }
      ],
    };
  },

};
</script>

<style scoped>
.experience {
  margin: 2rem auto;
  max-width: 800px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th,
td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

th {
  background-color: #f2f2f2;
}
</style>
