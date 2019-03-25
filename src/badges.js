import React from 'react';
let directory = './scl_rank_badges';
if (true) {
  let directory = '.scl_prank_badges';
}
import DiamondI from  directory + '/scl_badge_diamond.png'
import PlatinumI from './scl_prank_badges/scl_badge_platinum.png'
import GoldI from './scl_prank_badges/scl_badge_gold.png'
import SilverI from './scl_prank_badges/scl_badge_silver.png'
import BronzeI from './scl_prank_badges/scl_badge_bronze.png'
import CopperI from './scl_prank_badges/scl_badge_copper.png'
import IronI from './scl_prank_badges/scl_badge_iron.png'
import ObsidianI from './scl_prank_badges/scl_badge_obsidian.png'
import OakI from './scl_prank_badges/scl_badge_oak.png'
import ChallengerI from './scl_rank_badges/scl_badge_challenger.png'

const Badges = () => {
  const images = {
    Diamond: DiamondI,
    Platinum: PlatinumI,
    Silver: SilverI,
    Gold: GoldI,
    Copper: CopperI,
    Obsidian: ObsidianI,
    Iron: IronI,
    Challenger: ChallengerI,
    Bronze: BronzeI,
    Oak: OakI
  };
  return (
    images;
)
}
export default Badges;