import { Box, Button, Container, Heading, Img, Link, Text } from '@chakra-ui/react'
import React, { Fragment, useMemo, useState } from 'react'
import agerFarmer from './agerfarmer.png'
import martinator from './martinator.png'
import tie from './tie.png'
import quack from './Quack.mp3'
import { render } from 'react-dom'
import badAgerFarmer from './agerfarmer-mlg.png'
import badMartinator from './martinator-mlg.png'

const App = () => {
  const sound = useMemo(() => new Audio(quack), [])
  const [start, setStart] = useState(true)
  const [count, setCount] = useState(0)
  const [reset, setReset] = useState(false)
  const [martinatorCount, setMartinatorCount] = useState(0)
  const [agerFarmerCount, setAgerFarmerCount] = useState(0)
  const [turn, setTurn] = useState('')
  const [end, setEnd] = useState(false)

  let [firstRow, setFirstRow] = useState(['o', 'o', 'o'])
  let [secondRow, setSecondRow] = useState(['o', 'o', 'o'])
  let [thirdRow, setThirdRow] = useState(['o', 'o', 'o'])

  const [image, setImage] = useState(agerFarmer)

  if (reset) {
    setStart(true)
    setCount(0)
    setReset(false)
    setFirstRow(['o', 'o', 'o'])
    setSecondRow(['o', 'o', 'o'])
    setThirdRow(['o', 'o', 'o'])
    setMartinatorCount(0)
    setAgerFarmerCount(0)
    setImage(agerFarmer)
    setTurn('')
    setEnd(false)
  }

  const [round, setRound] = useState(0)
  const [agerWinCount, setAgerWinCount] = useState(0)
  const [martinatorWinCount, setMartinatorWinCount] = useState(0)
  const [tieCount, setTieCount] = useState(0)

  function updateIndex (index: number, row: number) {
    if (count % 2 === 0) {
      if (martinatorCount !== 4) {
        setImage(martinator)
        setMartinatorCount(martinatorCount + 1)
        setTurn('martinator')
      } else setEnd(true)
    } else if (count % 2 !== 0) {
      if (agerFarmerCount !== 5) {
        setImage(agerFarmer)
        setAgerFarmerCount(agerFarmerCount + 1)
        setTurn('agerFarmer')
      } else setEnd(true)
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
  console.log(firstRow)

  if (firstRow[0] === agerFarmer && firstRow[1] === agerFarmer && firstRow[2] === agerFarmer) {
    firstRow = [badAgerFarmer, badAgerFarmer, badAgerFarmer]
  }
  if (secondRow[0] === agerFarmer && secondRow[1] === agerFarmer && secondRow[2] === agerFarmer) {
    secondRow = [badAgerFarmer, badAgerFarmer, badAgerFarmer]
  }
  if (thirdRow[0] === agerFarmer && thirdRow[1] === agerFarmer && thirdRow[2] === agerFarmer) {
    thirdRow = [badAgerFarmer, badAgerFarmer, badAgerFarmer]
  }
  if (firstRow[0] === martinator && firstRow[1] === martinator && firstRow[2] === martinator) {
    firstRow = [badMartinator, badMartinator, badMartinator]
  }
  if (secondRow[0] === martinator && secondRow[1] === martinator && secondRow[2] === martinator) {
    secondRow = [badMartinator, badMartinator, badMartinator]
  }
  if (thirdRow[0] === martinator && thirdRow[1] === martinator && thirdRow[2] === martinator) {
    thirdRow = [badMartinator, badMartinator, badMartinator]
  }
  if (firstRow[0] === agerFarmer && secondRow[0] === agerFarmer && thirdRow[0] === agerFarmer) {
    firstRow[0] = badAgerFarmer
    secondRow[0] = badAgerFarmer
    thirdRow[0] = badAgerFarmer
  }
  if (firstRow[1] === agerFarmer && secondRow[1] === agerFarmer && thirdRow[1] === agerFarmer) {
    firstRow[1] = badAgerFarmer
    secondRow[1] = badAgerFarmer
    thirdRow[1] = badAgerFarmer
  }
  if (firstRow[2] === agerFarmer && secondRow[2] === agerFarmer && thirdRow[2] === agerFarmer) {
    firstRow[2] = badAgerFarmer
    secondRow[2] = badAgerFarmer
    thirdRow[2] = badAgerFarmer
  }
  if (firstRow[0] === martinator && secondRow[0] === martinator && thirdRow[0] === martinator) {
    firstRow[0] = badMartinator
    secondRow[0] = badMartinator
    thirdRow[0] = badMartinator
  }
  if (firstRow[1] === martinator && secondRow[1] === martinator && thirdRow[1] === martinator) {
    firstRow[1] = badMartinator
    secondRow[1] = badMartinator
    thirdRow[1] = badMartinator
  }
  if (firstRow[2] === martinator && secondRow[2] === martinator && thirdRow[2] === martinator) {
    firstRow[2] = badMartinator
    secondRow[2] = badMartinator
    thirdRow[2] = badMartinator
  }
  if (firstRow[0] === agerFarmer && secondRow[1] === agerFarmer && thirdRow[2] === agerFarmer) {
    firstRow[0] = badAgerFarmer
    secondRow[1] = badAgerFarmer
    thirdRow[2] = badAgerFarmer
  }
  if (firstRow[2] === agerFarmer && secondRow[1] === agerFarmer && thirdRow[0] === agerFarmer) {
    firstRow[2] = badAgerFarmer
    secondRow[1] = badAgerFarmer
    thirdRow[0] = badAgerFarmer
  }
  if (firstRow[0] === martinator && secondRow[1] === martinator && thirdRow[2] === martinator) {
    firstRow[0] = badMartinator
    secondRow[1] = badMartinator
    thirdRow[2] = badMartinator
  }
  if (firstRow[2] === martinator && secondRow[1] === martinator && thirdRow[0] === martinator) {
    firstRow[2] = badMartinator
    secondRow[1] = badMartinator
    thirdRow[0] = badMartinator
  }

  if (round === 70) {
    setStart(true)
    setCount(0)
    setReset(false)
  }

  if (end) {
    setRound(round + 1)
    setTurn('')
    setEnd(false)
  }

  function showAgerFarmer () {
    if (turn === 'martinator') return
    if (turn === '') {
      return (
        <Img src={agerFarmer} alt="Ager Farmer" w="220px" h="220px"/>
      )
    }
    if (turn === 'agerFarmer') {
      return (
        <Img src={agerFarmer} alt="Ager Farmer" w="220px" h="220px"/>
      )
    }
  }

  function showMartinator () {
    if (turn === 'agerFarmer') return
    if (turn === '') {
      return (
        <Img src={martinator} alt="Martinator" w="220px" h="220px"/>
      )
    }
    if (turn === 'martinator') {
      return (
        <Img src={martinator} alt="Martinator" w="220px" h="220px"/>
      )
    }
  }

  return (
    <Container w="100vw" h="100vh" maxW="100vw" bgColor="#1A2A33" display="flex" flexDirection="row" padding="0" justifyContent="space-between">
      <Box w="33vw" justifyContent="center" alignItems="center" display="flex" gap="30px" flexDir="column">
        <Text color="#31C3BD" fontSize="80px">{agerWinCount}</Text>
        {showAgerFarmer()}
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
          {!start ? <Button w="262px" bgColor="#65E9E4" h="65px" fontSize="50px" boxShadow="0 8px #118C87" _active={{ boxShadow: '0 8px #23a19d', transform: 'translateY(4px)' }} _hover={{ backgroundColor: '#26bbb6' }} onClick={() => { setStart(true); setReset(true) }}>Reset</Button> : <Button w="262px" bgColor="#FFC860" h="65px" fontSize="50px" boxShadow="0 8px #CC8B13" _active={{ boxShadow: '0 8px #9b680b', transform: 'translateY(4px)' }} _hover={{ backgroundColor: '#ffb01d' }} onClick={() => { setStart(false); setTurn(true) }}>Start</Button>}
        </Box>
        <Box display="flex" justifyContent="center" mt="25px" alignItems="center">
          <Img src={tie} h="80px"/>
          <Text color="#31C3BD" fontSize="80px">{tieCount}</Text>
        </Box>
      </Box>
      <Box w="33vw" justifyContent="center" alignItems="center" display="flex" gap="30px" flexDir="column">
        <Text color="#31C3BD" fontSize="80px">{martinatorWinCount}</Text>
        {showMartinator()}
      </Box>
    </Container>
  )
}

export default App
