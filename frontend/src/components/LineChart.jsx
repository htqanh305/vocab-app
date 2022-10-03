import Chart from 'react-apexcharts'
import {useSelector} from 'react-redux' 


function LineChart() {

    const learnedVocabs = useSelector((state) => state.vocabs.learnedVocabs)
    const newVocabs = useSelector((state) => state.vocabs.vocabs)

    const dateMap = new Map()
    const dates = []
    const newNum = []
    const learnedNum = []

    // count to number of learned vocabs for each date
    for (let vocab of learnedVocabs) {   
        let date = new Date(vocab.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })
        dateMap.has(date) ? 
        (dateMap.set(date, [0, dateMap.get(date)[1] + 1])) : 
        (dateMap.set(date, [0, 1]))
    }

    // count to number of new vocabs for each date
    for (let vocab of newVocabs) {   
        let date = new Date(vocab.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })
        dateMap.has(date) ? 
        (dateMap.set(date, [dateMap.get(date)[0] + 1, dateMap.get(date)[1]])) : 
        (dateMap.set(date, [1, 0]))
    }


    // sort date in the map in ascending order

    var dateMapSorted = new Map([...dateMap.entries()].sort(([a], [b]) => a.localeCompare(b)))


    
    // JS map reverses (key, value) here for some reason
    dateMapSorted.forEach((value, key) => {
        dates.push(key)
        newNum.push(value[0])
        learnedNum.push(value[1])
    })

   
    const options = {
        chart: {
            background: '#5d88ac',
            foreColor: '#030929'
        },
        xaxis: {
            categories: dates
        },
        markers: {
            size: 1,
        },

        title: {
            text: 'Vocabulary Journey',
            align: 'center',
            margin: 20,
            offsetY: 20,
            style: {
                fontSize: '25px'
            }
        },
        colors: ["rgb(28, 32, 62)", "rgb(140, 206, 239)"],
    }
    
    const series = [{
        name: 'Number of learned words',
        data: learnedNum
      },
      {
        name: 'Number of added new words',
        data: newNum
      }
    ]
    

    return (
        <Chart
            options={options}
            series={series}
            type="line"
            height="400px"
            width="100%"
            align="center"            
        />
    )

}

export default LineChart