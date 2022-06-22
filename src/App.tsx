import { Box, Button, Container, Heading, Img, Link, Text } from '@chakra-ui/react'
import React, { Fragment, useMemo, useState } from 'react'
import agerFarmer from './agerfarmer.png'
import martinator from './martinator.png'
import tie from './tie.png'
import quack from './Quack.mp3'
import { render } from 'react-dom'

const App = () => {
  const sound = useMemo(() => new Audio(quack), [])
  const [start, setStart] = useState(true)
  const [count, setCount] = useState(0)
  const [reset, setReset] = useState(false)

  const [firstRow, setFirstRow] = useState(['o', 'o', 'o'])
  const [secondRow, setSecondRow] = useState(['o', 'o', 'o'])
  const [thirdRow, setThirdRow] = useState(['o', 'o', 'o'])

  if (reset) {
    setStart(true)
    setCount(0)
    setReset(false)
    setFirstRow(['o', 'o', 'o'])
    setSecondRow(['o', 'o', 'o'])
    setThirdRow(['o', 'o', 'o'])
  }
  const [image, setImage] = useState(agerFarmer)

  const [round, setRound] = useState(69)

  function updateIndex (index: number, row: number) {
    if (count % 2 === 0) {
      setImage(martinator)
    } else if (count % 2 === 1) {
      setImage(agerFarmer)
    }
    if (row === 0) {
      firstRow.splice(index, 1, image)
    }
    if (row === 1) {
      secondRow.splice(index, 1, image)
    }
    if (row === 2) {
      thirdRow.splice(index, 1, image)
    }
  }

  if (round === 70) {
    setStart(true)
    setCount(0)
    setReset(false)
  }
  console.log(count)

  return (
    <Container w="100vw" h="100vh" maxW="100vw" bgColor="#1A2A33" display="flex" flexDirection="row" padding="0" justifyContent="space-between">
      <Box w="33vw" justifyContent="center" alignItems="center" display="flex" gap="30px" flexDir="column">
        <Text color="#31C3BD" fontSize="80px">1</Text>
        <Img src={agerFarmer} alt="Ager Farmer" w="220px" h="220px"/>
      </Box>
      <Box textAlign="center">
        <Box>
          <Heading color="#B9CFF0" fontSize="150px" fontFamily="sans-serif" fontWeight={500} mt="75px">TicTacToe</Heading>
        </Box>
        <Box display="flex" justifyContent="space-evenly" fontSize="80px" w="340px" ml="auto" mr="auto" mb="50px">
          <Text color="white">Round </Text>
          <Text color="#31C3BD">{round}</Text>
        </Box>
        <Box w="600px" color="grey" display="flex" fontSize="100px" justifyContent="space-evenly" ml="auto" mr="auto" >
          <Box>
            {firstRow.map((item, index) => {
              return (
                <Link _hover={{ border: 'none' }} key={`${index}benjaminblümchentorte`}>
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
                    : <Box borderRight="4px" borderBottom={index === 2 ? '' : '4px'} p="25px 100px 25px 100px" onClick={() => { setCount(count + 1); updateIndex(index, 0); setStart(false); sound.play() }}><Text color="#1A2A33">{item}</Text></Box>}
                </Link>
              )
            })}
          </Box>
          <Box>
            {secondRow.map((item, index) => {
              return (
                <Link _hover={{ border: 'none' }} key={`${index}kinder`}>
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
                    : <Box borderRight="4px" borderBottom={index === 2 ? '' : '4px'} p="25px 100px 25px 100px" onClick={() => { setCount(count + 1); updateIndex(index, 1); setStart(false); sound.play() }}><Text color="#1A2A33">{item}</Text></Box>}
                </Link>
              )
            })}
          </Box>
          <Box>
            {thirdRow.map((item, index) => {
              return (
                <Link _hover={{ border: 'none' }} key={`${index}kinderSalami`}>
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
                    : <Box borderBottom={index === 2 ? '' : '4px'} p="25px 100px 25px 100px" onClick={() => { setCount(count + 1); updateIndex(index, 2); setStart(false); sound.play() }}><Text color="#1A2A33">{item}</Text></Box>}
                </Link>
              )
            })}
          </Box>
        </Box>
        <Box mt="35px">
          {!start ? <Button w="262px" bgColor="#65E9E4" h="65px" fontSize="50px" boxShadow="0 8px #118C87" _active={{ boxShadow: '0 8px #23a19d', transform: 'translateY(4px)' }} _hover={{ backgroundColor: '#26bbb6' }} onClick={() => { setStart(true); setReset(true); sound.play() }}>Reset</Button> : <Button w="262px" bgColor="#FFC860" h="65px" fontSize="50px" boxShadow="0 8px #CC8B13" _active={{ boxShadow: '0 8px #9b680b', transform: 'translateY(4px)' }} _hover={{ backgroundColor: '#ffb01d' }} onClick={() => { setStart(false); sound.play() }}>Start</Button>}
        </Box>
        <Box display="flex" justifyContent="center" mt="25px" alignItems="center">
          <Img src={tie} h="80px"/>
          <Text color="#31C3BD" fontSize="80px">8</Text>
        </Box>
      </Box>
      <Box w="33vw" justifyContent="center" alignItems="center" display="flex" gap="30px" flexDir="column">
        <Text color="#31C3BD" fontSize="80px">7</Text>
        <Img src={martinator} alt="Ager Farmer" h="220px"/>
      </Box>
    </Container>
  )
}

export default App
