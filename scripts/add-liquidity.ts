import '@nomicfoundation/hardhat-ethers'
import { ethers } from 'hardhat'

async function main() {
  const [signer] = await ethers.getSigners()

  const token0Address = '0xeeA69cb740081ddf2683Db6aD6915B69C7854c40'
  const token1Address = '0x58E5CA763ad1b1288EB573862dB1F87399A2D3F8'
  const poolAddress = '0xf950EF6BaD186cCF355ae5075482bFe03698287b'
  const positionManagerAddress = '0x9CF8093FA96B991DFFC1e1d958f4F2AD857a5611'

  try {
    const token0Contract = await ethers.getContractAt('IERC20', token0Address)
    const token1Contract = await ethers.getContractAt('IERC20', token1Address)
    const poolContract = await ethers.getContractAt('IUniswapV3Pool', poolAddress)
    const positionManager = await ethers.getContractAt('PositionManager', positionManagerAddress)

    // Get current tick
    const [sqrtPriceX96, tick] = await poolContract.slot0()
    const tickSpacing = await poolContract.tickSpacing()
    const currentTick = Number(tick)

    const tickLower = Math.floor(currentTick / Number(tickSpacing)) * Number(tickSpacing)
    const tickUpper = tickLower + Number(tickSpacing)

    console.log('Using ticks:', { currentTick, tickLower, tickUpper })

    // Check initial state
    const beforeState = {
      token0: await token0Contract.balanceOf(poolAddress),
      token1: await token1Contract.balanceOf(poolAddress),
      liquidity: await poolContract.liquidity(),
    }

    // Try larger amounts
    const amount = ethers.parseUnits('1000', 18)
    await token0Contract.approve(positionManagerAddress, amount)
    await token1Contract.approve(positionManagerAddress, amount)

    const mintTx = await positionManager.mint(poolAddress, tickLower, tickUpper, amount, amount, { gasLimit: 1000000 })

    console.log('Transaction:', mintTx.hash)
    await mintTx.wait()

    // Check final state
    const afterState = {
      token0: await token0Contract.balanceOf(poolAddress),
      token1: await token1Contract.balanceOf(poolAddress),
      liquidity: await poolContract.liquidity(),
    }

    console.log('Changes:', {
      token0: ethers.formatUnits(afterState.token0 - beforeState.token0, 18),
      token1: ethers.formatUnits(afterState.token1 - beforeState.token1, 18),
      liquidity: (afterState.liquidity - beforeState.liquidity).toString(),
    })
  } catch (error) {
    console.error('Error:', error)
  }
}

main()
