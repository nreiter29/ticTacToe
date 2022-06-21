import { Box, Button, Container, Heading, Img, Link, Text } from '@chakra-ui/react'
import React, { Fragment, useState } from 'react'
import agerFarmer from './agerfarmer.png'
import martinator from './martinator.png'
import tie from './tie.png'

const App = () => {
  const [start, setStart] = useState(true)
  const [turn, setTurn] = useState(false)
  const [count, setCount] = useState(0)
  const [reset, setReset] = useState(false)
  const agerOrMartinator = [
    'o', 'o', 'o',
    'o', 'o', 'o',
    'o', 'o', 'o',
  ]

  const firstrow = [
    'o', 'o', 'o',
  ]
  const secondrow = [
    'o', 'o', 'o',
  ]
  const thirdrow = [
    'o', 'o', 'o',
  ]

  if (reset) {
    setStart(true)
    setCount(0)
    setTurn(false)
    setReset(false)
  }

  agerOrMartinator[0] = martinator
  console.log(secondrow)

  const round = 'x'

  function updateIndex (index: number, row: number) {
    if (row === 1) {
      firstrow.splice(index, 1, 'irgendwos')
    }
    if (row === 2) {
      secondrow.splice(index, 1, 'irgendwos')
    }
    if (row === 3) {
      thirdrow.splice(index, 1, 'irgendwos')
    }
  }

  return (
    <Container w="100vw" h="100vh" maxW="100vw" bgColor="#1A2A33" display="flex" flexDirection="row" padding="0" justifyContent="space-between">
      <Box w="33vw" justifyContent="center" alignItems="center" display="flex" gap="30px" flexDir="column">
        <Text color="#31C3BD" fontSize="80px">Number</Text>
        <Img src={agerFarmer} alt="Ager Farmer" w="220px" h="220px"/>
      </Box>
      <Box textAlign="center">
        <Box>
          <Heading color="#B9CFF0" fontSize="150px" fontFamily="sans-serif" fontWeight={500} mt="75px">TicTacToe</Heading>
        </Box>
        <Box display="flex" justifyContent="space-evenly" fontSize="80px" w="320px" ml="auto" mr="auto" mb="50px">
          <Text color="white">Round </Text>
          <Text color="#31C3BD">{round}</Text>
        </Box>
        <Box w="600px" color="grey" display="flex" fontSize="100px" justifyContent="space-evenly" ml="auto" mr="auto" >
          <Box>
            {firstrow.map((item, index) => {
              return (
                <Link onClick={() => { setCount(count + 1); updateIndex(1, index) }} _hover={{ border: 'none' }} key={`${index}benjaminblümchentorte`}>
                  {(item !== 'o')
                    ? (
                      <Box
                        borderRight="4px"
                        borderBottom={index === 2 ? '' : '4px'}
                        h="204px"
                        w="263px"
                        pt="1px"
                      ><Img src={item} h="150px" w="150px" ml="60px" mt="30px"/>
                      </Box>
                      )
                    : <Box borderRight="4px" borderBottom={index === 2 ? '' : '4px'} p="25px 100px 25px 100px"><Text color="#1A2A33">{item}</Text></Box>}
                </Link>
              )
            })}
          </Box>
          <Box>
            {secondrow.map((item, index) => {
              return (
                <Link onClick={() => { setCount(count + 1); secondrow[index] = 'x'; updateIndex(2, index) }} _hover={{ border: 'none' }} key={`${index}kinder`}>
                  {(item !== 'o')
                    ? (
                      <Box
                        borderRight="4px"
                        borderBottom={index === 2 ? '' : '4px'}
                        h="204px"
                        w="263px"
                        pt="1px"
                      ><Img src={item} h="150px" w="150px" ml="60px" mt="30px"/>
                      </Box>
                      )
                    : <Box borderRight="4px" borderBottom={index === 2 ? '' : '4px'} p="25px 100px 25px 100px"><Text color="#1A2A33">{item}</Text></Box>}
                </Link>
              )
            })}
          </Box>
          <Box>
            {thirdrow.map((item, index) => {
              return (
                <Link onClick={() => { setCount(count + 1); updateIndex(3, index) }} _hover={{ border: 'none' }} key={`${index}kinderSalami`}>
                  {(item !== 'o')
                    ? (
                      <Box
                        borderBottom={index === 2 ? '' : '4px'}
                        h="204px"
                        w="263px"
                        pt="1px"
                      ><Img src={item} h="150px" w="150px" ml="60px" mt="30px"/>
                      </Box>
                      )
                    : <Box borderBottom={index === 2 ? '' : '4px'} p="25px 100px 25px 100px"><Text color="#1A2A33">{item}</Text></Box>}
                </Link>
              )
            })}
          </Box>
        </Box>
        <Box mt="35px">
          {!start ? <Button w="262px" bgColor="#65E9E4" h="65px" fontSize="50px" boxShadow="0 8px #118C87" _active={{ boxShadow: '0 8px #23a19d', transform: 'translateY(4px)' }} _hover={{ backgroundColor: '#26bbb6' }} onClick={() => { setStart(true); setReset(true) }}>Reset</Button> : <Button w="262px" bgColor="#FFC860" h="65px" fontSize="50px" boxShadow="0 8px #CC8B13" _active={{ boxShadow: '0 8px #9b680b', transform: 'translateY(4px)' }} _hover={{ backgroundColor: '#ffb01d' }} onClick={() => setStart(false)}>Start</Button>}
        </Box>
        <Box display="flex" justifyContent="center" mt="25px" alignItems="center">
          <Img src={tie} h="80px"/>
          <Text color="#31C3BD" fontSize="80px">Number</Text>
        </Box>
      </Box>
      <Box w="33vw" justifyContent="center" alignItems="center" display="flex" gap="30px" flexDir="column">
        <Text color="#31C3BD" fontSize="80px">Number</Text>
        <Img src={martinator} alt="Ager Farmer" h="220px"/>
      </Box>
    </Container>
  )
}

export default App
