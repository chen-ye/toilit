export default function applyDefaultValues (litElementComponent) {
  for (const [ propertyName, propertyDefinition] of Object.entries(litElementComponent.constructor.properties)) {
    const {value } = propertyDefinition;
    if (value !== undefined) {
      litElementComponent[propertyName] = value;
    }
  }
}