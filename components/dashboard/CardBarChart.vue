<script>
import { Bar } from 'vue-chartjs'

const datasets = [
  {
    label: 'My First dataset',
    backgroundColor: '#007bff',
    borderColor: 'rgba(255,255,255,.55)',
    data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
  }
]

export default {
  extends: Bar,
  props: {
    height: {
      type: [String, Number, Object, Array, Boolean],
      default: null
    }
  },
  mounted() {
    this.renderChart(
      {
        labels: [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        datasets: datasets
      },
      {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: false,
              categoryPercentage: 1,
              barPercentage: 0.5
            }
          ],
          yAxes: [
            {
              display: false
            }
          ]
        }
      }
    )
  }
}
</script>
