import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Component, useCallback, useEffect, useState } from 'react';

import { GigList } from "../cmps/GigList";
import { loadGigs, setFilterBy } from "../store/gig.action";
import { GigFilter } from "../cmps/GigFilter";

export const Explore = (props) => {

  const { gigs } = useSelector(state => state.gigModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGigs());
  }, [])

  return (
    <div className="content-container home-layout">
      {/* <GigFilter onChangeFilter={onChangeFilter} /> */}
      <GigList />
    </div>
  );
}
