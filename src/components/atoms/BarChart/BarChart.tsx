import { ResponsiveBar } from "@nivo/bar";
import { BarChartWrapper } from "./BarChart.styles";

export const BarChart = ({ data }: any) => (
  <BarChartWrapper>
    <ResponsiveBar
      data={data}
      keys={["acousticness", "danceability", "energy", "instumentalness", "liveness", "speechiness", "valence"]}
      indexBy='feature'
      margin={{ top: 50, bottom: 50 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={[
        "rgba(30, 215, 96, 0.5)",
        "rgba(245, 39, 76, 0.8)",
        "rgba(148, 159, 15, 0.8)",
        "rgba(15, 136, 159, 0.8)",
        "rgba(106, 15, 159, 0.8)",
        "rgba(159, 15, 109, 0.8)",
        "rgba(224, 100, 0, 0.8)",
      ]}
      borderColor='red'
      minValue={0}
      maxValue={1}
      colorBy='id'
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={"red"}
      role='application'
      barAriaLabel={(e) => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
      enableLabel={false}
    />
  </BarChartWrapper>
);
