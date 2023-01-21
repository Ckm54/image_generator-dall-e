import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {getRandomPrompt} from '../utils';
import preview from '../assets/preview.png';
import { FormField , Loader } from '../components';

const CreatePost = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  return (
    <section className='max-w-7xl mx-auto'></section>
  )
}

export default CreatePost