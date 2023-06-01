import React from 'react'
import { VscArrowSmallDown } from "react-icons/vsc";
import { TbDirection } from "react-icons/tb";
import data from "../data/data.json"
import img from '../data/destination.jpeg'


export default function Table() {
    return (
        <div>
            <div className='tableeading container'>
                <p className='InfluencerFound'>2,426 Influencer Found</p>
                <small className='relevance'>Relevance<TbDirection/></small>
            </div>
            <table>
                <tr>
                    <th className='checckbox'><input type='checkbox'></input></th>
                    <th><small>Influencer Profile</small></th>
                    <th><small>Location</small></th>
                    <th><small>Category</small></th>
                    <th><small>Folllowers</small><VscArrowSmallDown /></th>
                    <th><small>Avg Likes</small><VscArrowSmallDown /></th>
                    <th><small>Avg. Reel Views</small><VscArrowSmallDown /></th>
                    <th><small>Engagement rate</small><VscArrowSmallDown /></th>
                </tr>
                {data.Influencer.map((item) => {
                    return(
                    <tr>
                        <td><input type='checkbox'></input></td>
                        <td style={{fontWeight:'bold'}}><img alt='profile' src={img} style={{width: '25px', height: '25px',borderRadius: '50px',marginRight:"6px"}}></img>{item.full_name}</td>
                        <td>{item.location}</td>
                        <td><small style={{backgroundColor:'#D3D3D3',borderRadius:'3px',padding:'3px'}}>{item.category}</small></td>
                        <td>{item.followers}</td>
                        <td>{item.avg_likes}</td>
                        <td>{item.reel_views}</td>
                        <td>{item.engagement_rate}</td>
                    </tr>
                    )
                })}
            </table>
        </div>
    )
}
