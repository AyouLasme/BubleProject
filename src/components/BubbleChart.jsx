import React, { Component } from 'react';
import * as d3 from 'd3';
import '../App.css';

class BubbleChart extends Component {
  state = {
    data: null,
    isBubbleChartVisible: false,
  };

  svgRef = React.createRef();
  width = 900;
  height = 600;
  treeLayout = d3.tree().size([this.width, this.height]);
  marginX = 50;
  marginY = 50;

  telechargerFichier = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        this.setState({ data: JSON.parse(e.target.result) });
      } catch (error) {
        console.error('Erreur lors de la lecture du fichier JSON :', error);
      }
    };
    reader.readAsText(file);
  };

  createBubbleChart = () => {
    // Supprimez le contenu SVG existant s'il y en a un
    d3.select(this.svgRef.current).selectAll('*').remove();

    const { data } = this.state;
    const svg = d3.select(this.svgRef.current).attr('width', this.width).attr('height', this.height);
    const root = d3.hierarchy(data);
    const treeData = this.treeLayout(root);

    treeData.descendants().forEach((node) => {
      // Ajoutez les marges aux coordonnées x et y
      node.x += this.marginX;
      node.y = node.y * 0.5 + this.marginY; // Pour réduire la longueur des liens
    });

    const node = svg
      .selectAll('.node')
      .data(treeData.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', (d) => `translate(${d.x},${d.y})`)
      .on('click', this.handleBubbleClick);

    node
      .append('circle')
      .attr('r', (d) => Math.max(15, d.data.nom.length * 3))
      .style('fill', (d) => d.data.couleur);

    node
      .append('text')
      .text((d) => d.data.nom)
      .attr('dy', '0.2em')
      .style('text-anchor', 'middle')
      .style('font-family', (d) => d.data.police);

    const links = treeData.links();

    svg
      .selectAll('.link')
      .data(links)
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', (d) => `M${d.source.x},${d.source.y} L${d.target.x},${d.target.y}`)
      .style('stroke', 'gray')
      .style('stroke-width', 1)
      .style('fill', 'none');
  };

  handleBubbleClick = (event, d) => {
    const svg = d3.select(this.svgRef.current);
    svg.node().appendChild(event.currentTarget);

    d3.select(event.currentTarget)
      .select('circle')
      .style('stroke', 'black')
      .style('stroke-width', 1);
  };

  AfficherBubbles = () => {
    if (this.state.data) {
      this.setState({ isBubbleChartVisible: true }, this.createBubbleChart);
    }
  };

  render() {
    const { isBubbleChartVisible, data } = this.state;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div>
          <input type="file" accept=".json" onChange={this.telechargerFichier} />

        
          <button className="custom-styling flex-shrink-0 h-10 px-5 ml-2 text-sm font-medium border rounded-lg " onClick={this.AfficherBubbles} disabled={!data}>
              Afficher
          </button>
          {isBubbleChartVisible && <svg ref={this.svgRef}></svg>}
        </div>
      </div>
    );
  }
}

export default BubbleChart;
