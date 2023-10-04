<template>
    <div id="chartWrap">
        <canvas id="radar" width="400" height="400"></canvas>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import { Chart } from 'chart.js/auto';

export default {
    name: 'radarChart',
    setup() {

        onMounted(() => {
            const ctx = document.getElementById('radar');
            const label = ['작품성', '음악', '연출력', '연기력', '오락성'];
            const data = [5, 4.3, 4, 5, 3.4];
            const chart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: label,
                    datasets: [{
                        data: data,
                        borderWidth: 0,
                        backgroundColor: 'rgba(249, 192, 65, 0.8)',
                        pointBorderWidth: 0,
                        pointStyle: false,
                        pointLabel: false
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            pointLabels: {
                                font: {
                                    size: 17
                                }
                            },
                            grid: {
                                color:'black'
                            },
                            angleLines:{
                                display: false
                            },
                            suggestedMin: 0,
                            suggestedMax: 5,
                            ticks: {
                                stepSize: 1,
                                display:false
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        });

        return {  };
    }
}
</script>

<style scoped>
#chartWrap {
    width: 100%; 
}

#chart {
    width: 400px; height:400px;
}
</style>