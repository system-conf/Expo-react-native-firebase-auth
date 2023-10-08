import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('Kullanıcı başarıyla kaydedildi!');
    } catch (error) {
      console.error('Kayıt olma hatası:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <TextInput
        placeholder="E-posta adresi"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ marginBottom: 12, padding: 8, borderWidth: 1 }}
      />
      <TextInput
        placeholder="Şifre"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={{ marginBottom: 12, padding: 8, borderWidth: 1 }}
      />
      <Button title="Kayıt Ol" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
