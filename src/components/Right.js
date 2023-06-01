import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { VscClose, VscFilterFilled } from "react-icons/vsc";
import Table from './Table';

export default function Right() {
    return (
        <div className='right'>
            <div className='rightfirstdiv'>
                <div>
                    <h5 className='p'>Influencer Discovery</h5>
                    <small>easy to use, depth you need it, real-time segmentation</small>
                </div>
                <div>
                    <button className='btn1'><AiFillHeart className='hearticon' /><small>Liked Profile</small></button>
                    <button className='btn2'><small>Compare</small></button>
                </div>
            </div>
            <div className='rightseconddiv'>
                <div className='rightseconddiv1'>
                    <input className='seconddivinput' type='text' placeholder="Search"></input>
                    <button className='seconddivsearchbtn' ><small>Search</small></button>
                </div>
                <div className='rightseconddiv2'>
                    <button className='seconddivfilterbtn'>Filter <VscFilterFilled /></button>
                </div>
            </div>
            <div className='btnsandinputs'>
                <div>
                    <p className='p'><small>Category</small></p>
                    <div class="input-group mb-3" style={{ width: '210px'}}>
                        <select class="form-select" id="inputGroupSelect01">
                            <option selected>Search</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div>
                    <p className='p'><small>Location</small></p>
                    <div class="input-group mb-3" style={{ width: '210px'}}>
                        <select class="form-select" id="inputGroupSelect01">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div>
                    <p className='p'><small>Followers</small></p>
                    <div class="input-group mb-3" style={{ width: '210px'}}>
                        <select class="form-select" id="inputGroupSelect01">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div>
                    <p className='p'><small>Type Of Account</small></p>
                    <div class="input-group mb-3" style={{ width: '210px'}} >
                        <select class="form-select" id="inputGroupSelect01">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='threenbtn'>
                <button className='Categorybtn'><small>Category Name</small> <VscClose /></button>
                <button className='Categorybtn'><small>Location Name</small> <VscClose /></button>
                <button className='Categorybtn'><small>Location 2</small> <VscClose /></button>
            </div>
            <Table />
        </div>
    )
}
