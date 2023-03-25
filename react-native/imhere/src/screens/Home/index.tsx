import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const participants = [
    "Luiz",
    "Carlos",
    "Jão",
    "Tão",
    "Pepe",
    "Ronaldo",
    "Laura",
    "Bento",
    "Lara",
    "Emily",
  ];

  function handleParticipantAdd() {
    if (participants.includes("Luiz")) {
      return Alert.alert(
        "Participant existe",
        "Já existe um participante na lista com esse nome."
      );
    }
    console.log("voce clicou no botao de adicionar");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participant ${name}`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participants a sua lista de
            presença
          </Text>
        )}
      />
    </View>
  );
}
