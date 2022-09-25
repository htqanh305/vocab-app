import Chart from 'react-apexcharts'
import {useSelector} from 'react-redux' 


function LearnedPieChart() {

    const learnedVocabs = useSelector((state) => state.vocabs.learnedVocabs)

    const dateMap = new Map()
    const types = []
    const learnedNum = []

    // count to number of learned vocabs for each type
    for (let vocab of learnedVocabs) {   
        let type = vocab.wordType
        dateMap.has(type) ? 
        (dateMap.set(type, dateMap.get(type) + 1)) : 
        (dateMap.set(type, 1))
    }

    // JS map reverses (key, value) here for some reason
    dateMap.forEach((value, key) => {
        types.push(key)
        learnedNum.push(value)
    })

    const series = learnedNum
    const options = {
        chart: {
            width: 380,
            foreColor: '#fff7d0',            
        },
        colors: ["#7393B3", "#5F9EA0", "#0047AB", "#ADD8E6", "#191970", "#96DED1", "#4682B4", "#40E0D0",],
        title: {
            text: 'Learned Words',
            align: 'center',
            margin: 20,
            offsetY: 5,
            style: {
                fontSize: '20px'
                }
        },
        labels: types, 
        legend: {
            position: 'bottom',
        }, 

}
    


    return (
        <Chart
            options={options}
            series={series}
            type="pie"
            width="380px"
            align="center"
            
        />
    )

}

export default LearnedPieChart