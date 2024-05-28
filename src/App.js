import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main'
import Channel from './pages/Channel';
import Video from './pages/Video';
import Search from './pages/Search';

const Home = lazy(() => import('./pages/Home'));
const Yih = lazy(() => import('./pages/Yih'));
const Koreamovie = lazy(() => import('./pages/Koreamovie'));
const Globalmovie = lazy(() => import('./pages/Globalmovie'));
const Actionmovie = lazy(() => import('./pages/Actionmovie'));
const Romancemovie = lazy(() => import('./pages/Romancemovie'));
const Comedymovie = lazy(() => import('./pages/Comedymovie'));
const Musicalmovie = lazy(() => import('./pages/Musicalmovie'));
const Animationmovie = lazy(() => import('./pages/Animationmovie'));
const Movieost = lazy(() => import('./pages/Movieost'));

const App = () => {
  return (
    <BrowserRouter >
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/yih' element={<Yih />} />
          <Route path='/Koreamovie' element={<Koreamovie />} />
          <Route path='/Globalmovie' element={<Globalmovie />} />
          <Route path='/Actionmovie' element={<Actionmovie />} />
          <Route path='/Romancemovie' element={<Romancemovie />} />
          <Route path='/Comedymovie' element={<Comedymovie />} />
          <Route path='/Musicalmovie' element={<Musicalmovie />} />
          <Route path='/Animationmovie' element={<Animationmovie />} />
          <Route path='/Movieost' element={<Movieost />} />
          <Route path='/channel/:channelId' element={<Channel />} />
          <Route path='/video/:videoId' element={<Video />} />
          <Route path='/search/:searchId' element={<Search />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
