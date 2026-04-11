interface Props {
  verifiedDate?: string
}

export function PriceDisclaimer({ verifiedDate }: Props) {
  const date = verifiedDate ?? "April 2026"
  return (
    <p className="text-xs text-white/30 font-sans italic mt-2">
      Prices and availability verified {date}. All prices are subject to change — always confirm directly with the provider.
    </p>
  )
}
