// imports
import { Box, Button, Container, Heading, Hide, Img, Link, Select, Show, Text } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'
import agerFarmer from './agerfarmer.png'
import martinator from './martinator.png'
import tie from './tie.png'
import quack from './Quack.mp3'
import badAgerFarmer from './agerfarmer-mlg.png'
import badMartinator from './martinator-mlg.png'
import alex from './alexDerPunk.png'
import badAlex from './alexDerGayePunk.png'
import max from './maxDerGroße.png'
import maxTheQueen from './maxDieGroßeQueen.png'
import david from './davidDerWildeHengst.png'
import davidTheStalker from './daviDerBadHengst.png'

// App component
const App = () => {
  // added a sound effect
  const sound = useMemo(() => new Audio(quack), [])

  // adding useStates
  let [start, setStart] = useState(true)
  const [count, setCount] = useState(0)
  const [reset, setReset] = useState(false)
  const [martinatorCount, setMartinatorCount] = useState(0)
  const [agerFarmerCount, setAgerFarmerCount] = useState(0)
  const [turn, setTurn] = useState('')
  const [end, setEnd] = useState(false)
  const [valueLeftSide, setValue] = useState<string>('')
  let characterLeftSide = ''
  let badLeftSide = ''
  let characterRightSide = ''
  let badRightSide = ''
  const [valueRightSide, setValueRightSide] = useState<string>('')

  // handle the value of the select for the left side
  if (valueLeftSide === 'Martinator') {
    characterLeftSide = martinator
    badLeftSide = badMartinator
  }
  if (valueLeftSide === 'AgerFarmer') {
    characterLeftSide = agerFarmer
    badLeftSide = badAgerFarmer
  }
  if (valueLeftSide === 'Max') {
    characterLeftSide = max
    badLeftSide = maxTheQueen
  }
  if (valueLeftSide === 'David') {
    characterLeftSide = david
    badLeftSide = davidTheStalker
  }
  if (valueLeftSide === 'Alex') {
    characterLeftSide = alex
    badLeftSide = badAlex
  }

  // handle the value of the select for the right side
  if (valueRightSide === 'Martinator') {
    characterRightSide = martinator
    badRightSide = badMartinator
  }
  if (valueRightSide === 'AgerFarmer') {
    characterRightSide = agerFarmer
    badRightSide = badAgerFarmer
  }
  if (valueRightSide === 'Max') {
    characterRightSide = max
    badRightSide = maxTheQueen
  }
  if (valueRightSide === 'David') {
    characterRightSide = david
    badRightSide = davidTheStalker
  }
  if (valueRightSide === 'Alex') {
    characterRightSide = alex
    badRightSide = badAlex
  }

  // added rows
  const [firstRow, setFirstRow] = useState(['o', 'o', 'o'])
  const [secondRow, setSecondRow] = useState(['o', 'o', 'o'])
  const [thirdRow, setThirdRow] = useState(['o', 'o', 'o'])

  // added finalend
  let [finalEnd, setFinalEnd] = useState(false)

  // set image useState
  const [image, setImage] = useState(characterLeftSide)
  useEffect(() => {
    setImage(characterLeftSide)
  }
  , [characterLeftSide])

  // added reset option
  if (reset) {
    setStart(true)
    setCount(0)
    setFirstRow(['o', 'o', 'o'])
    setSecondRow(['o', 'o', 'o'])
    setThirdRow(['o', 'o', 'o'])
    setMartinatorCount(0)
    setAgerFarmerCount(0)
    setImage(characterLeftSide)
    setTurn('')
    setEnd(false)
    setFinalEnd(false)
    setReset(false)
  }

  // adding vars
  const [round, setRound] = useState(0)
  const [agerWinCount, setAgerWinCount] = useState(0)
  const [martinatorWinCount, setMartinatorWinCount] = useState(0)
  const [tieCount, setTieCount] = useState(0)

  // function for setting pics
  function updateIndex (index: number, row: number) {
    if (count % 2 === 0) {
      if (martinatorCount !== 4) {
        setImage(characterRightSide)
        setMartinatorCount(martinatorCount + 1)
        setTurn('martinator')
      } else setEnd(true)
    } else if (count % 2 !== 0) {
      if (agerFarmerCount !== 5) {
        setImage(characterLeftSide)
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

  // martinator win function
  function martinWin () {
    setMartinatorWinCount(martinatorWinCount + 1)
  }

  // ager farmer win function
  function agerFarmerWin () {
    setAgerWinCount(agerWinCount + 1)
  }

  // tie function
  function tieTie () {
    if (firstRow[0] === badLeftSide || firstRow[1] === badLeftSide || firstRow[2] === badLeftSide || secondRow[0] === badRightSide || secondRow[1] === badRightSide || secondRow[2] === badRightSide || thirdRow[0] === badLeftSide || thirdRow[1] === badLeftSide || thirdRow[2] === badLeftSide || firstRow[0] === badRightSide || firstRow[1] === badRightSide || firstRow[2] === badRightSide || secondRow[0] === badLeftSide || secondRow[1] === badLeftSide || secondRow[2] === badLeftSide || thirdRow[0] === badRightSide || thirdRow[1] === badRightSide || thirdRow[2] === badRightSide) {
      return null
    } else {
      setTieCount(tieCount + 1)
    }
  }

  // function for the end of the game
  const codeShortner = (character: string, bad: string, whoWins: () => void) => {
    if (firstRow[0] === character && firstRow[1] === character && firstRow[2] === character) {
      setEnd(true)
      whoWins()
      setFirstRow([bad, bad, bad])
    } else if (secondRow[0] === character && secondRow[1] === character && secondRow[2] === character) {
      setSecondRow([bad, bad, bad])
      whoWins()
      setEnd(true)
    } else if (thirdRow[0] === character && thirdRow[1] === character && thirdRow[2] === character) {
      setThirdRow([bad, bad, bad])
      whoWins()
      setEnd(true)
    } else if (firstRow[0] === character && secondRow[0] === character && thirdRow[0] === character) {
      setFirstRow([bad, firstRow[1], firstRow[2]])
      setSecondRow([bad, secondRow[1], secondRow[2]])
      setThirdRow([bad, thirdRow[1], thirdRow[2]])
      whoWins()
      setEnd(true)
    } else if (firstRow[1] === character && secondRow[1] === character && thirdRow[1] === character) {
      setFirstRow([firstRow[0], bad, firstRow[2]])
      setSecondRow([secondRow[0], bad, secondRow[2]])
      setThirdRow([thirdRow[0], bad, thirdRow[2]])
      whoWins()
      setEnd(true)
    } else if (firstRow[2] === character && secondRow[2] === character && thirdRow[2] === character) {
      setFirstRow([firstRow[0], firstRow[1], bad])
      setSecondRow([secondRow[0], secondRow[1], bad])
      setThirdRow([thirdRow[0], thirdRow[1], bad])
      whoWins()
      setEnd(true)
    } else if (firstRow[0] === character && secondRow[1] === character && thirdRow[2] === character) {
      setFirstRow([bad, firstRow[1], firstRow[2]])
      setSecondRow([secondRow[0], bad, secondRow[2]])
      setThirdRow([thirdRow[0], thirdRow[1], bad])
      whoWins()
      setEnd(true)
    } else if (firstRow[2] === character && secondRow[1] === character && thirdRow[0] === character) {
      setFirstRow([firstRow[0], firstRow[1], bad])
      setSecondRow([secondRow[0], bad, secondRow[2]])
      setThirdRow([bad, thirdRow[1], thirdRow[2]])
      whoWins()
      setEnd(true)
    } else if (firstRow[0] !== 'x' && firstRow[1] !== 'x' && firstRow[2] !== 'x' && secondRow[0] !== 'x' && secondRow[1] !== 'x' && secondRow[2] !== 'x' && thirdRow[0] !== 'x' && thirdRow[1] !== 'x' && thirdRow[2] !== 'x' && end) {
      tieTie()
    }
  }

  // carry out the functions
  codeShortner(characterLeftSide, badLeftSide, agerFarmerWin)
  codeShortner(characterRightSide, badRightSide, martinWin)

  // end option
  if (end) {
    setRound(round + 1)
    setTurn('')
    setFinalEnd(true)
    setEnd(false)
  }

  // show agerFarmer
  function showAgerFarmer () {
    if (valueLeftSide !== '') {
      if (turn === 'martinator') {
        return (
          <Img src={characterLeftSide} alt="Ager Farmer" w={['60px', '90px', '130px', '140px', '250px']} h={['60px', '90px', '130px', '140px', '250px']} filter="grayscale(100%)"/>
        )
      }
      if (turn === '') {
        return (
          <Img src={characterLeftSide} alt="Ager Farmer" w={['60px', '90px', '130px', '140px', '250px']} h={['60px', '90px', '130px', '140px', '250px']}/>
        )
      }
      if (turn === 'agerFarmer') {
        return (
          <Img src={characterLeftSide} alt="Ager Farmer" w={['60px', '90px', '130px', '140px', '250px']} h={['60px', '90px', '130px', '140px', '250px']}/>
        )
      }
    }
  }

  // show martinator
  function showMartinator () {
    if (valueRightSide !== '') {
      if (turn === 'agerFarmer') {
        return (
          <Img src={characterRightSide} alt="Martinator" w={['60px', '90px', '130px', '140px', '250px']} h={['60px', '90px', '130px', '140px', '250px']} filter="grayscale(100%)"/>
        )
      }
      if (turn === '') {
        return (
          <Img src={characterRightSide} alt="Martinator" w={['60px', '90px', '130px', '140px', '250px']} h={['60px', '90px', '130px', '140px', '250px']}/>
        )
      }
      if (turn === 'martinator') {
        return (
          <Img src={characterRightSide} alt="Martinator" w={['60px', '90px', '130px', '140px', '250px']} h={['60px', '90px', '130px', '140px', '250px']}/>
        )
      }
    }
  }

  // shows who is next
  function itsYourTurn () {
    if (valueLeftSide !== '' && valueRightSide !== '') {
      if (turn === 'agerFarmer') {
        return (
          <Text color="white" fontSize={['18px', '25px', '35px', '35px', '50px']} mb="50px">{valueLeftSide} it's your turn!</Text>
        )
      }
      if (turn === 'martinator') {
        return (
          <Text color="white" fontSize={['18px', '25px', '35px', '35px', '50px']} mb="50px">{valueRightSide} it's your turn!</Text>
        )
      }
      if (turn === '') {
        return (
          <Text color="white" fontSize={['18px', '25px', '35px', '35px', '50px']} mb="50px">Click to start the game!</Text>
        )
      }
    } return <Text color="white" fontSize={['18px', '25px', '35px', '35px', '50px']} mb="50px">First choose a Player!</Text>
  }

  // feature that you cant use the same character twice
  if (valueLeftSide !== '' && valueRightSide !== '') {
    if (characterLeftSide === characterRightSide) {
      setValueRightSide('Martinator')
      setValue('AgerFarmer')
    }
  }

  // options for the Left Side
  const OptionsLeftSide = () => {
    return (
      <>
        {valueRightSide !== 'AgerFarmer' &&
          <option value="AgerFarmer">The Farmer</option>}
        {valueRightSide !== 'Martinator' &&
          <option value="Martinator">The Stoner</option>}
        {valueRightSide !== 'Max' &&
          <option value="Max">The Queen</option>}
        {valueRightSide !== 'Alex' &&
          <option value="Alex">The Gay Punk</option>}
        {valueRightSide !== 'David' &&
          <option value="David">The Stalker</option>}
      </>
    )
  }

  // options for the Right Side
  const OptionsRightSide = () => {
    return (
      <>
        {valueLeftSide !== 'AgerFarmer' &&
          <option value="AgerFarmer">The Farmer</option>}
        {valueLeftSide !== 'Martinator' &&
          <option value="Martinator">The Stoner</option>}
        {valueLeftSide !== 'Max' &&
          <option value="Max">The Queen</option>}
        {valueLeftSide !== 'Alex' &&
          <option value="Alex">The Gay Punk</option>}
        {valueLeftSide !== 'David' &&
          <option value="David">The Stalker</option>}
      </>
    )
  }
  if (valueLeftSide === '' || valueRightSide === '') {
    finalEnd = true
    start = true
  }

  // return
  return (
    <Container w="100vw" h="100vh" maxW="100vw" bgColor="#1A2A33" display="flex" flexDirection="row" padding="0" justifyContent="space-between">
      <Hide below="xl">
        <Box w="33vw" justifyContent="center" alignItems="center" display="flex" flexDir="column">
          <Select placeholder="Choose your Player" color="#1A2A33" w="300px" textAlign="center" bgColor="#B9CFF0" value={valueLeftSide} onChange={e => setValue(e.target.value)}>
            <OptionsLeftSide/>
          </Select>
          <Text color="#31C3BD" fontSize="80px" mb="0px">{agerWinCount}</Text>
          {showAgerFarmer()}
        </Box>
      </Hide>
      <Box textAlign="center" ml="auto" mr="auto" mt="auto" mb="auto">
        <Box>
          <Heading color="#B9CFF0" fontSize={['50px', '70px', '90px', '90px', '150px']} fontFamily="sans-serif" fontWeight={500} mt="20px">TicTacToe</Heading>
        </Box>
        <Box display="flex" justifyContent="space-evenly" fontSize={['30px', '40px', '60px', '60px', '80px']} w="340px" ml="auto" mr="auto" mb="0px">
          <Text color="white">Round</Text>
          <Text color="#31C3BD">{round}</Text>
        </Box>
        {itsYourTurn()}
        <Box w="600px" color="grey" display="flex" fontSize="80px" justifyContent="space-evenly" ml="auto" mr="auto" >
          <Box>
            {firstRow.map((item, index) => {
              return (
                <Link _hover={{ border: 'none' }} key={`${index}benjaminblümchentorte`}>
                  {(item !== 'o')
                    ? (
                      <Box
                        borderRight={['1px', '2px', '4px', '4px']}
                        borderBottom={index === 2 ? '' : ['1px', '2px', '4px', '4px']}
                        h={['80px', '130px', '190px', '204px']}
                        w={['200px', '200px', '240px', '263px']}
                        pt="1px"
                      ><Img src={item} h={['60px', '90px', '130px', '150px']} w={['60px', '90px', '130px', '150px']} ml="60px" mt="30px"/>
                      </Box>
                      )
                    : !finalEnd ? <Box borderRight={['1px', '2px', '4px', '4px']} h={['80px', '130px', '190px', '204px']} w={['200px', '200px', '240px', '263px']} borderBottom={index === 2 ? '' : ['1px', '2px', '4px', '4px']} p="25px 80px 25px 80px" onClick={() => { setCount(count + 1); updateIndex(index, 0); setStart(false); sound.play() }} fontSize="10px"><Text color="#1A2A33" fontSize="10px">{item}</Text></Box> : <Box borderRight={['1px', '2px', '4px', '4px']} h={['80px', '130px', '190px', '204px']} w={['200px', '200px', '240px', '263px']} borderBottom={index === 2 ? '' : ['1px', '2px', '4px', '4px']} p="25px 80px 25px 80px" fontSize="10px"><Text color="#1A2A33">{item}</Text></Box>}
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
                        borderRight={['1px', '2px', '4px', '4px']}
                        borderBottom={index === 2 ? '' : ['1px', '2px', '4px', '4px']}
                        h={['80px', '130px', '190px', '204px']}
                        w={['200px', '200px', '240px', '263px']}
                        pt="1px"
                      ><Img src={item} h={['60px', '90px', '130px', '150px']} w={['60px', '90px', '130px', '150px']} ml="60px" mt="30px"/>
                      </Box>
                      )
                    : !finalEnd ? <Box borderRight={['1px', '2px', '4px', '4px']} h={['80px', '130px', '190px', '204px']} w={['200px', '200px', '240px', '263px']} borderBottom={index === 2 ? '' : ['1px', '2px', '4px', '4px']} p="25px 80px 25px 80px" onClick={() => { setCount(count + 1); updateIndex(index, 1); setStart(false); sound.play() }} fontSize="10px"><Text color="#1A2A33" fontSize="10px">{item}</Text></Box> : <Box borderRight={['1px', '2px', '4px', '4px']} h={['80px', '130px', '190px', '204px']} w={['200px', '200px', '240px', '263px']} borderBottom={index === 2 ? '' : ['1px', '2px', '4px', '4px']} p="25px 80px 25px 80px" fontSize="10px"><Text color="#1A2A33">{item}</Text></Box>}
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
                        borderBottom={index === 2 ? '' : ['1px', '2px', '4px', '4px']}
                        h={['80px', '130px', '190px', '204px']}
                        w={['200px', '200px', '240px', '263px']}
                        pt="1px"
                      ><Img src={item} h={['60px', '90px', '130px', '150px']} w={['60px', '90px', '130px', '150px']} ml="60px" mt="30px"/>
                      </Box>
                      )
                    : !finalEnd ? <Box borderBottom={index === 2 ? '' : ['1px', '2px', '4px', '4px']} h={['80px', '130px', '190px', '204px']} w={['200px', '200px', '240px', '263px']} p="25px 80px 25px 80px" onClick={() => { setCount(count + 1); updateIndex(index, 2); setStart(false); sound.play() }}><Text color="#1A2A33" fontSize="10px">{item}</Text></Box> : <Box borderBottom={index === 2 ? '' : ['1px', '2px', '4px', '4px']} h={['80px', '130px', '190px', '204px']} w={['200px', '200px', '240px', '263px']} p="25px 80px 25px 80px" fontSize="10px"><Text color="#1A2A33">{item}</Text></Box>}
                </Link>
              )
            })}
          </Box>
        </Box>
        <Box mt="35px">
          {!start ? <Button w="262px" bgColor="#65E9E4" h="65px" fontSize="50px" boxShadow="0 8px #118C87" _active={{ boxShadow: '0 8px #23a19d', transform: 'translateY(4px)' }} _hover={{ backgroundColor: '#26bbb6' }} onClick={() => { setStart(true); setReset(true) }}>Reset</Button> : <Button w="262px" bgColor="#FFC860" h="65px" fontSize="50px" boxShadow="0 8px #CC8B13" _active={{ boxShadow: '0 8px #9b680b', transform: 'translateY(4px)' }} _hover={{ backgroundColor: '#ffb01d' }} onClick={() => { setStart(false); setTurn('agerFarmer') }}>Start</Button>}
        </Box>
        <Hide below="xl">
          <Box display="flex" justifyContent="center" mt="25px" alignItems="center">
            <Img src={tie} h="80px"/>
            <Text color="#31C3BD" fontSize="80px">{tieCount}</Text>
          </Box>
        </Hide>
        <Show below="xl">
          <Box display="flex" w="400px" alignContent="space-between" ml="auto" mr="auto" justifyContent="space-between" mt="25px">
            <Box w="80px" justifyContent="center" alignItems="center" display="flex" flexDir="column">
              <Select placeholder="Choose your Player" color="#1A2A33" w={['200px', '200px', '200px', '250px']} textAlign="center" bgColor="#B9CFF0" value={valueLeftSide} onChange={e => setValue(e.target.value)}>
                <OptionsLeftSide/>
              </Select>
              <Text color="#31C3BD" fontSize="50px" mb="0px">{agerWinCount}</Text>
              {showAgerFarmer()}
            </Box>
            <Box w="80px" justifyContent="center" alignItems="center" display="flex" flexDir="column">
              <Select placeholder="Choose your Player" color="#1A2A33" w={['200px', '200px', '200px', '250px']} textAlign="center" bgColor="#B9CFF0" value={valueRightSide} onChange={e => setValueRightSide(e.target.value)}>
                <OptionsRightSide/>
              </Select>
              <Text color="#31C3BD" fontSize="50px" mb="0px">{martinatorWinCount}</Text>
              <Box>
                {showMartinator()}
              </Box>
            </Box>
          </Box>
        </Show>
      </Box>
      <Hide below="xl">
        <Box w="33vw" justifyContent="center" alignItems="center" display="flex" flexDir="column">
          <Select placeholder="Choose your Player" color="#1A2A33" w="300px" textAlign="center" bgColor="#B9CFF0" value={valueRightSide} onChange={e => setValueRightSide(e.target.value)}>
            <OptionsRightSide/>
          </Select>
          <Text color="#31C3BD" fontSize="80px" mb="0px">{martinatorWinCount}</Text>
          <Box>
            {showMartinator()}
          </Box>
        </Box>
        <Img src="https://deepsource.io/gh/nreiter29/ticTacToe.svg/?label=active+issues&show_trend=true&token=9XtQOWOsWsEbL-yPWEf70JPy)%5D(https://deepsource.io/gh/nreiter29/ticTacToe/?ref=repository-badge" w="400px" position="absolute" left="full" right="25px" top="full" bottom="25px"/>
      </Hide>
    </Container>
  )
}

// export default App
export default App
