import React, { useState } from 'react';
import
  { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
    Clipboard,
    TouchableWithoutFeedback
  } from 'react-native';

//import Clipboard from '@react-native-community/clipboard';

import styles from './global';

export default function App() {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [finalUrl, setFinalUrl] = useState('');

  const short = async () => {
    Keyboard.dismiss();

    // Se http OU https tiver incluso
    if(url.includes('http://') || url.includes('https://')) {
      await fetch(`https://cutt.ly/api/api.php?key=90147ffabb64e93c73834c66bc6f6b5ede647&short=${url}&name=${name}`)
      .then(async response => {
        const data = await response.json();

        if(data.url.status === 2) {
          alert('Url é inválida!');
          return;
        }

        if(data.url.status === 3) {
          alert('Esse nome já está em uso!');
          return;
        }

        setFinalUrl(data.url.shortLink);

        //console.log(data);
      })

      return;
    }

    alert('Url inválida, tente novamente.')
  }

  function copyUrl() {
    Clipboard.setString(finalUrl);
    alert('Url copiada com sucesso.')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>encurtador
          <Text style={styles.subTitle}>Url</Text>
        </Text>

        <TextInput
          style={styles.urlInput}
          onChangeText={(text) => setUrl(text)}
          value={ url }
          placeholder="Digite a url..."
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.urlInput}
          onChangeText={(text) => setName(text)}
          value={ name }
          placeholder="Nome personalizado"
          placeholderTextColor="#999"
        />

        <TouchableOpacity
          onPress={() => short()}
          style={styles.shortBtn}
        >
          <Text style={{ color: '#FFF' }}>
            Encurtar
          </Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback
          onPress={finalUrl ? copyUrl : () => {}}
        >
          <Text style={styles.finalResultUrl}>
            { finalUrl }
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};
