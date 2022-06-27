// imports
import { Box, Button, Container, Heading, Hide, Img, Link, Select, Text } from '@chakra-ui/react'
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
  let characterLeftSide: string
  let badLeftSide: string
  let characterRightSide: string
  let badRightSide: string
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

  // if statement for ending game
  if (firstRow[0] === characterLeftSide && firstRow[1] === characterLeftSide && firstRow[2] === characterLeftSide) {
    setEnd(true)
    agerFarmerWin()
    setFirstRow([badLeftSide, badLeftSide, badLeftSide])
  } else if (secondRow[0] === characterLeftSide && secondRow[1] === characterLeftSide && secondRow[2] === characterLeftSide) {
    setSecondRow([badLeftSide, badLeftSide, badLeftSide])
    agerFarmerWin()
    setEnd(true)
  } else if (thirdRow[0] === characterLeftSide && thirdRow[1] === characterLeftSide && thirdRow[2] === characterLeftSide) {
    setThirdRow([badLeftSide, badLeftSide, badLeftSide])
    agerFarmerWin()
    setEnd(true)
  } else if (firstRow[0] === characterRightSide && firstRow[1] === characterRightSide && firstRow[2] === characterRightSide) {
    setFirstRow([badRightSide, badRightSide, badRightSide])
    martinWin()
    setEnd(true)
  } else if (secondRow[0] === characterRightSide && secondRow[1] === characterRightSide && secondRow[2] === characterRightSide) {
    setSecondRow([badRightSide, badRightSide, badRightSide])
    martinWin()
    setEnd(true)
  } else if (thirdRow[0] === characterRightSide && thirdRow[1] === characterRightSide && thirdRow[2] === characterRightSide) {
    setThirdRow([badRightSide, badRightSide, badRightSide])
    martinWin()
    setEnd(true)
  } else if (firstRow[0] === characterLeftSide && secondRow[0] === characterLeftSide && thirdRow[0] === characterLeftSide) {
    setFirstRow([badLeftSide, firstRow[1], firstRow[2]])
    setSecondRow([badLeftSide, secondRow[1], secondRow[2]])
    setThirdRow([badLeftSide, thirdRow[1], thirdRow[2]])
    agerFarmerWin()
    setEnd(true)
  } else if (firstRow[1] === characterLeftSide && secondRow[1] === characterLeftSide && thirdRow[1] === characterLeftSide) {
    setFirstRow([firstRow[0], badLeftSide, firstRow[2]])
    setSecondRow([secondRow[0], badLeftSide, secondRow[2]])
    setThirdRow([thirdRow[0], badLeftSide, thirdRow[2]])
    agerFarmerWin()
    setEnd(true)
  } else if (firstRow[2] === characterLeftSide && secondRow[2] === characterLeftSide && thirdRow[2] === characterLeftSide) {
    setFirstRow([firstRow[0], firstRow[1], badLeftSide])
    setSecondRow([secondRow[0], secondRow[1], badLeftSide])
    setThirdRow([thirdRow[0], thirdRow[1], badLeftSide])
    agerFarmerWin()
    setEnd(true)
  } else if (firstRow[0] === characterRightSide && secondRow[0] === characterRightSide && thirdRow[0] === characterRightSide) {
    setFirstRow([badRightSide, firstRow[1], firstRow[2]])
    setSecondRow([badRightSide, secondRow[1], secondRow[2]])
    setThirdRow([badRightSide, thirdRow[1], thirdRow[2]])
    martinWin()
    setEnd(true)
  } else if (firstRow[1] === characterRightSide && secondRow[1] === characterRightSide && thirdRow[1] === characterRightSide) {
    setFirstRow([firstRow[0], badRightSide, firstRow[2]])
    setSecondRow([secondRow[0], badRightSide, secondRow[2]])
    setThirdRow([thirdRow[0], badRightSide, thirdRow[2]])
    agerFarmerWin()
    setEnd(true)
    martinWin()
    setEnd(true)
  } else if (firstRow[2] === characterRightSide && secondRow[2] === characterRightSide && thirdRow[2] === characterRightSide) {
    setFirstRow([firstRow[0], firstRow[1], badRightSide])
    setSecondRow([secondRow[0], secondRow[1], badRightSide])
    setThirdRow([thirdRow[0], thirdRow[1], badRightSide])
    martinWin()
    setEnd(true)
  } else if (firstRow[0] === characterLeftSide && secondRow[1] === characterLeftSide && thirdRow[2] === characterLeftSide) {
    setFirstRow([badLeftSide, firstRow[1], firstRow[2]])
    setSecondRow([secondRow[0], badLeftSide, secondRow[2]])
    setThirdRow([thirdRow[0], thirdRow[1], badLeftSide])
    agerFarmerWin()
    setEnd(true)
  } else if (firstRow[2] === characterLeftSide && secondRow[1] === characterLeftSide && thirdRow[0] === characterLeftSide) {
    setFirstRow([firstRow[0], firstRow[1], badLeftSide])
    setSecondRow([secondRow[0], badLeftSide, secondRow[2]])
    setThirdRow([badLeftSide, thirdRow[1], thirdRow[2]])
    agerFarmerWin()
    setEnd(true)
  } else if (firstRow[0] === characterRightSide && secondRow[1] === characterRightSide && thirdRow[2] === characterRightSide) {
    setFirstRow([badRightSide, firstRow[1], firstRow[2]])
    setSecondRow([secondRow[0], badRightSide, secondRow[2]])
    setThirdRow([thirdRow[0], thirdRow[1], badRightSide])
    martinWin()
    setEnd(true)
  } else if (firstRow[2] === characterRightSide && secondRow[1] === characterRightSide && thirdRow[0] === characterRightSide) {
    setFirstRow([firstRow[0], firstRow[1], badRightSide])
    setSecondRow([secondRow[0], badRightSide, secondRow[2]])
    setThirdRow([badRightSide, thirdRow[1], thirdRow[2]])
    martinWin()
    setEnd(true)
  } else if (firstRow[0] !== 'x' && firstRow[1] !== 'x' && firstRow[2] !== 'x' && secondRow[0] !== 'x' && secondRow[1] !== 'x' && secondRow[2] !== 'x' && thirdRow[0] !== 'x' && thirdRow[1] !== 'x' && thirdRow[2] !== 'x' && end) {
    tieTie()
  }

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
          <Img src={characterLeftSide} alt="Ager Farmer" w="220px" h="220px" filter="grayscale(100%)"/>
        )
      }
      if (turn === '') {
        return (
          <Img src={characterLeftSide} alt="Ager Farmer" w="220px" h="220px"/>
        )
      }
      if (turn === 'agerFarmer') {
        return (
          <Img src={characterLeftSide} alt="Ager Farmer" w="220px" h="220px"/>
        )
      }
    }
  }

  // show martinator
  function showMartinator () {
    if (valueRightSide !== '') {
      if (turn === 'agerFarmer') {
        return (
          <Img src={characterRightSide} alt="Ager Farmer" w="180px" h="220px" filter="grayscale(100%)"/>
        )
      }
      if (turn === '') {
        return (
          <Img src={characterRightSide} alt="Martinator" w="180px" h="220px"/>
        )
      }
      if (turn === 'martinator') {
        return (
          <Img src={characterRightSide} alt="Martinator" w="180px" h="220px"/>
        )
      }
    }
  }

  // shows who is next
  function itsYourTurn () {
    if (turn === 'agerFarmer') {
      return (
        <Text color="white" fontSize={['18px', '25px', '35px', '50px']} mb="50px">{valueLeftSide} it's your turn!</Text>
      )
    }
    if (turn === 'martinator') {
      return (
        <Text color="white" fontSize={['18px', '25px', '35px', '50px']} mb="50px">{valueRightSide} it's your turn!</Text>
      )
    }
    if (turn === '') {
      return (
        <Text color="white" fontSize={['18px', '25px', '35px', '50px']} mb="50px">Click to start the game!</Text>
      )
    }
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
    if (valueRightSide === 'Martinator') {
      return (
        <>
          <option value="AgerFarmer">The Farmer</option>
          <option value="Max">The Queen</option>
          <option value="Alex">The Gay Punk</option>
          <option value="David">The Stalker</option>
        </>
      )
    } else if (valueRightSide === 'AgerFarmer') {
      return (
        <>
          <option value="Martinator">The Stoner</option>
          <option value="Max">The Queen</option>
          <option value="Alex">The Gay Punk</option>
          <option value="David">The Stalker</option>
        </>
      )
    } else if (valueRightSide === 'Max') {
      return (
        <>
          <option value="AgerFarmer">The Farmer</option>
          <option value="Max">The Queen</option>
          <option value="Alex">The Gay Punk</option>
          <option value="David">The Stalker</option>
        </>
      )
    } else if (valueRightSide === 'Alex') {
      return (
        <>
          <option value="Martinator">The Stoner</option>
          <option value="Max">The Queen</option>
          <option value="AgerFarmer">The Farmer</option>
          <option value="David">The Stalker</option>
        </>
      )
    } else if (valueRightSide === 'David') {
      return (
        <>
          <option value="Martinator">The Stoner</option>
          <option value="Max">The Queen</option>
          <option value="AgerFarmer">The Farmer</option>
          <option value="Alex">The Gay Punk</option>
        </>
      )
    } else {
      return (
        <>
          <option value="AgerFarmer">The Farmer</option>
          <option value="Martinator">The Stoner</option>
          <option value="Max">The Queen</option>
          <option value="Alex">The Gay Punk</option>
          <option value="David">The Stalker</option>
        </>
      )
    }
  }

  // options for the Right Side
  const OptionsRightSide = () => {
    if (valueLeftSide === 'Martinator') {
      return (
        <>
          <option value="AgerFarmer">The Farmer</option>
          <option value="Max">The Queen</option>
          <option value="Alex">The Gay Punk</option>
          <option value="David">The Stalker</option>
        </>
      )
    } else if (valueLeftSide === 'AgerFarmer') {
      return (
        <>
          <option value="Martinator">The Stoner</option>
          <option value="Max">The Queen</option>
          <option value="Alex">The Gay Punk</option>
          <option value="David">The Stalker</option>
        </>
      )
    } else if (valueLeftSide === 'Max') {
      return (
        <>
          <option value="AgerFarmer">The Farmer</option>
          <option value="Max">The Queen</option>
          <option value="Alex">The Gay Punk</option>
          <option value="David">The Stalker</option>
        </>
      )
    } else if (valueLeftSide === 'Alex') {
      return (
        <>
          <option value="Martinator">The Stoner</option>
          <option value="Max">The Queen</option>
          <option value="AgerFarmer">The Farmer</option>
          <option value="David">The Stalker</option>
        </>
      )
    } else if (valueLeftSide === 'David') {
      return (
        <>
          <option value="Martinator">The Stoner</option>
          <option value="Max">The Queen</option>
          <option value="AgerFarmer">The Farmer</option>
          <option value="Alex">The Gay Punk</option>
        </>
      )
    } else {
      return (
        <>
          <option value="AgerFarmer">The Farmer</option>
          <option value="Martinator">The Stoner</option>
          <option value="Max">The Queen</option>
          <option value="Alex">The Gay Punk</option>
          <option value="David">The Stalker</option>
        </>
      )
    }
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
          <Heading color="#B9CFF0" fontSize={['50px', '70px', '90px', '150px']} fontFamily="sans-serif" fontWeight={500} mt="20px">TicTacToe</Heading>
        </Box>
        <Box display="flex" justifyContent="space-evenly" fontSize={['30px', '40px', '60px', '80px']} w="340px" ml="auto" mr="auto" mb="0px">
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
