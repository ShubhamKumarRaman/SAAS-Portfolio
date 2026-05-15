import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import Blog from '../pages/Blog'
import Resume from '../pages/Resume'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='skills' element={<Skills />} />
        <Route path='blog' element={<Blog />} />
        <Route path='resume' element={<Resume />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes