import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Taj mahal',
          visiters: 400,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Cappadocia',
          visiters: 300,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Guanajuato',
          visiters: 200,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Cinque',
          visiters: 150,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Angkor Wat',
          visiters: 100,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Bali Island',
          visiters: 50,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Machu Picchu',
          visiters: 10,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Tours</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>20</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Notifications</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="visiters" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home