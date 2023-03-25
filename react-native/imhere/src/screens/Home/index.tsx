import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  function handleParticipantAdd() {
    console.log("voce clicou no botao de adicionar");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Voce clicou em remover participante ${name}`);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant
        name="Luiz"
        onRemove={() => handleParticipantRemove("Luiz")}
      />
    </View>
  );
}
