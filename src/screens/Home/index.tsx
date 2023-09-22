import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participants";

export default function Home() {
  const [participant, setParticipant] = React.useState<string>("");
  const [participants, setParticipants] = React.useState<string[]>([
    "Rod",
    "Yah",
    "Watson",
    "Samuca",
  ]);
  const handleParticipantAdd = React.useCallback(() => {
    if (participants.includes(participant)) {
      return Alert.alert(
        "Participante já incluso!",
        "O Participante Rod já está incluso na lista de presença."
      );
    }
    setParticipants((prev) => [...prev, participant]);
    setParticipant("");
  }, [participant]);

  const handleParticipantRemove = React.useCallback((name?: string) => {
    const data = Alert.alert(
      "Remover",
      `Deseja remover o participante ${name}?`,
      [
        {
          text: "Remover",
          style: "destructive",
          onPress: () =>
            setParticipants((prev) => prev.filter((person) => person !== name)),
        },
        { text: "Cancelar", style: "cancel" },
      ]
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.event}>Role aleatório em SP</Text>
      <Text style={styles.date}>Sexta, 23 de janeiro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          autoComplete="name"
          style={styles.input}
          value={participant}
          onChangeText={setParticipant}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(_, index) => `participant_${index}`}
        renderItem={({ item, index }) => (
          <Participant
            onRemove={() => handleParticipantRemove(item)}
            name={item}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>
            Ninguém chegou ainda? Adicione pessoas a lista de presença
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
